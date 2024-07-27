import { User } from '../../models/user.model';
import * as Yup from "yup";
import userService from '../../services/user.service';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register: React.FC = () => {

    const [message, setMessage] = useState<string>("");
    const [successful, setSuccessful] = useState<boolean>(false);

    const initialValues: User = {
        name: '',
        email: '',
        password: ''
    }

    let navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .test('len', '氏名は3 ～ 20 文字にする必要があります.', 
                (val: any) => 
                    val &&
                    val.toString().length >= 3 &&
                    val.toString().length <= 20
            )
            .required('このフィールドは必須です!'),
        email: Yup.string()
            .email('これは有効なメールではありません!')
            .required('このフィールドは必須です!'),
        password: Yup.string()
            .test('len', 'パスワードは 6 ～ 20 文字にする必要があります.',
                (val: any) =>
                    val &&
                    val.toString().length >= 6 &&
                    val.toString().length <= 40
            )
            .required("このフィールドは必須です!"),
    });

    const handleRegister = (formValue: User) => {
        userService.register(formValue)
            .then(() => {
                setMessage("ユーザーが正常に登録されました!");
                setSuccessful(true);
                navigate('/login');
            })
            .catch(error => {
                const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                setMessage(resMessage);
                setSuccessful(false);
            });
    }
    return (
        <div className='col-md-12'>
            <div className='card card-container'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}    
                >
                    <Form>
                        <div>
                            <div className='form-group'>
                                <label htmlFor="name">氏名</label>
                                <Field type='text' name='name' className='form-control' />
                                <ErrorMessage name='name' component='div' className='alert alert-danger' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">メール</label>
                                <Field type='email' name='email' className='form-control' />
                                <ErrorMessage name='email' component='div' className='alert alert-danger' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"> パスワード </label>
                                <Field
                                    name="password"
                                    type="password"
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                        {message && (
                            <div className="form-group">
                                <div
                                className={
                                    successful ? "alert alert-success" : "alert alert-danger"
                                }
                                role="alert"
                                >
                                {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Register;
