import {useAuth} from '../../context/AuthContext/AuthContext.tsx';
import {useNavigate} from 'react-router-dom';
import Field from "../../components/Field";
import {SubmitHandler, useForm} from "react-hook-form";
import {LoginFormInputs} from "./types.ts";
import {emailValidation, passwordValidation} from "./validations.ts";

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onChange"
    });
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/');
    };
    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        handleLogin()
        console.log(data);
    };

    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <div className='w-1/3'>
                    <div className='w-full py-6 px-10 bg-white rounded-2xl'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Field
                                label="Email"
                                type="text"
                                placeholder="Your email"
                                register={register('email', emailValidation)}
                                errors={errors.email}
                            />
                            <Field
                                label="Password"
                                type="password"
                                placeholder="Your password"
                                register={register('password', passwordValidation)}
                                errors={errors.password}
                            />
                            <button
                                className='rounded-xl mt-2 w-full text-xl font-medium text-gray-600 bg-amber-400 h-12 hover:text-white'
                                type="submit"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;