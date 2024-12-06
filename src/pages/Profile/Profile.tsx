import Field from '../../components/Field';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GiCheckMark } from 'react-icons/gi';
import PhotoUploader from '../../components/PhotoUploader';
import { LoginFormInputs } from '../Login/types.ts';

const Profile = () => {
  const { handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const handlePhotoUpload = (file: File | null) => {
    if (file) {
      console.log('Uploaded file:', file);
    } else {
      console.log('No file uploaded or file invalid.');
    }
  };

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white h-full p-6 rounded-3xl">
      <h1 className="font-bold text-3xl h-14 border-b-2">Profile</h1>
      <div className="flex flex-row gap-4 border-b-2 py-5">
        <h3 className="font-bold text-2xl">Profile photo</h3>
        <PhotoUploader maxFileSizeKB={500} onPhotoUpload={handlePhotoUpload} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4 border-b-2 py-5">
          <h3 className="font-bold text-2xl">Contact</h3>
          <div className="flex flex-col w-1/2 px-[10%]">
            <Field label="User name" type="text" placeholder="User name" />
          </div>
        </div>
        <div className="flex flex-row gap-4 border-b-2 py-5">
          <h3 className="font-bold text-2xl">Email address</h3>
          <div className="flex flex-col w-1/2 px-[5%] justify-center text-gray-600 text-lg">
            valik@gmail.com
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button className="font-medium h-10 w-40 bg-amber-400 border border-black hover:border-white flex items-center justify-center rounded-3xl flex-row gap-3 hover:text-white">
            <GiCheckMark />
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
