import React, { useState } from 'react';

interface PhotoUploaderProps {
  maxFileSizeKB?: number;
  supportedFormats?: string[];
  onPhotoUpload?: (file: File | null) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  maxFileSizeKB = 500,
  supportedFormats = ['image/jpeg', 'image/png', 'image/gif'],
  onPhotoUpload,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Перевірка формату файлу
      if (!supportedFormats.includes(file.type)) {
        setError('Unsupported file format. Supported formats: jpg, png, gif.');
        setPreview(null);
        onPhotoUpload?.(null);
        return;
      }

      // Перевірка розміру файлу
      const fileSizeKB = file.size / 1024;
      if (fileSizeKB > maxFileSizeKB) {
        setError(`File size exceeds ${maxFileSizeKB} KB.`);
        setPreview(null);
        onPhotoUpload?.(null);
        return;
      }

      // Генерація попереднього перегляду
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
        setError(null);
        onPhotoUpload?.(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-row gap-4 ml-[5%]'>
      <div className='mb-4 text-center'>
        {preview ? (
          <img
            src={preview}
            alt='Preview'
            className='w-40 h-40 rounded-full object-cover border-2 border-gray-300'
          />
        ) : (
          <div className='w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-300 text-sm text-gray-500'>
            No Photo
          </div>
        )}
      </div>
      <div className='flex flex-col gap-2 justify-center'>
        <label className='h-1/4 w-1/2 border-2 border-gray-300 flex items-center justify-center rounded-full hover:cursor-pointer hover:border-gray-950'>
          + Upload Photo
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='hidden'
          />
        </label>
        <div>
          <p className='text-xs'>
            Supported formats: jpg, gif, png. Max file size: {maxFileSizeKB} KB.
          </p>
          <div className='h-10'>
            {error && <p className='text-red-700 text-xs mt-2'>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploader;
