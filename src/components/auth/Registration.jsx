import {useForm} from "react-hook-form";
import './Authorization.css'
import reg_image from '../../components/assets/reg_image.png'
import googleIcon from '../../components/assets/googleIcon.png'
import apple from '../../components/assets/appleIcon.png'
import facebook from '../../components/assets/facebookIcon.png'
import {signInWithGoogle} from '../../Firebase'
import { Link } from "react-router-dom";

const Authorization = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)
    


    return (
        <div className='cc'>
            <div className="auth_box">
                <div className="auth_reg">
                    <Link to='/profile'><h2 className="h2_auth">Войти</h2></Link> 
                    <Link to='/authorization'><h2>Регистрация</h2></Link>  
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='e-mail'>
                    <input type="text" placeholder='Введите e-mail'
                    {...register("email", {
                        required: "Обьязательно",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Ваш email не подходит под нужный формат"
                        }
                    })}
                    />
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div>
                <div className='password'>
                    <input type="password" name="cpassword" placeholder='Введите пароль'
                    {...register("cpassword", {
                        validate: (value) => {
                            if (watch('password') != value) {
                                return "Вы ввели неправильный пароль";
                            }
                        },
                        required: 'Параметр обязателен'
                    })}
                    />
                    {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
                </div>
                    <div className='remember'>
                        <input  className="remember_inp" type="checkbox" />
                        <h5>Запомнить меня</h5>
                    </div>
                <div className="Sign_in">
                        <label htmlFor="submit"></label>
                        <input className="Sign_in_input" type="submit" name="submit" value="Войти"/>
                </div>
                </form>
                <div className='forget'>
                    <Link to='/createnewpassword'><a href="#" className='forget_pass'>Забыли пароль?</a></Link>
                </div>
    
                <div>
                    <div className='contact_auth'>
                        <p>Войти с помощью</p>
                    </div>
                    <div className='social_net'>
                        <div>
                            <img onClick={signInWithGoogle} src={googleIcon} alt="" />
                        </div>
                        <div>
                            <img src={apple} alt="" />
                        </div>
                        <div>
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img_box">
                <img src={reg_image} alt="" width={800}/>
            </div>
        </div>
    )
};

export default Authorization