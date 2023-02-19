import Email from './Email'
import facebook from '../assets/facebookIcon.png';
import apple from '../assets/appleIcon.png';
import google from '../assets/googleIcon.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Registration';
import { useForm } from "react-hook-form";

export default function Authorization (props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data =>{ console.log(data);}
    console.log(errors)
    return (
        <div className="form-modal">
               <div className="title-modal">Введите код</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_container">
                <input className="login_name"
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Параметр обязателен",
                            minLength: {
                              value: 7,
                              message: "Минимальная длина кода 7 символов"
                            }
                          })}
                          
                    />
                  

                {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                <div className="login">
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-888600229%3A1676644362498411&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dru&ec=GAlA8wE&hl=ru&flowName=GlifWebSignIn&flowEntry=AddSession"><img src={google}alt="" width={50} height={50}/></a>
                    <a href="https://www.icloud.com/?id=123"><img src={apple}alt=""width={38} height={44} /></a>
                    <a href="https://m.facebook.com/login/?locale2=ru_RU"><img src={facebook}alt="" width={50} height={50}/></a>
                </div>
                <div className="form_container">
                    <input className="input_login" type="submit" value="Войти"/>
                </div>
                <div className="formAnother_container">
                    <a href='/email'className='p'>Забыли пароль?</a>
                </div>
            </form>
        </div>
    )

};

