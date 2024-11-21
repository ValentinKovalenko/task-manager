export const emailValidation = {
    required: 'Email is required',
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Enter a valid email address'
    }
};

export const passwordValidation = {
    required: 'Password is required',
    minLength: {
        value: 6,
        message: 'Password must be at least 6 characters long'
    }
};