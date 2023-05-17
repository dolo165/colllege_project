import Email from './Email'
import facebook from '../assets/facebookIcon.png';
import apple from '../assets/appleIcon.png';
import google from '../assets/googleIcon.png';
import {auth, provider} from '../../app/firebase'
import {signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from "react-hook-form";
import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Authorization (props) {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = async data =>{ console.log(data);}
     console.log(errors)
        const [login, setLogin] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState(false)
    
        async function signInWithGoogle() {
            try {
                await signInWithPopup(auth, provider)
                props.closeModal({ type: "modal", active:"false"})
            } catch (error) {
                console.log(error)
            }
        }
    
        async function signIn(e) {
            e.preventDefault()
            try {
                setError(false)
                await signInWithEmailAndPassword(auth, login, password)
            } catch(error) {
                setError(true)
            }
        }
    
        function inputLogin(e) {
            setLogin(e.target.value)
        }
    
        function inputPassword(e) {
            setPassword(e.target.value)
        }
    
    return (
        <div className="form-modal">
            <div className="title-modal">Авторизация</div>
            <div className='error' style={{
                display: (error) ? 'block' : 'none',
                color: 'red'
            }}> 
                Такого пользователя не существует, проверьте введеный логин и пароль 
            </div>
            <form onSubmit={signIn}>
            <div className="form_containery">
                   <input className='input_email'
                       type="text" 
                       name="email" 
                       placeholder="Email"
                       {...register("email", {
                           required: "Параметр обязателен",
                           pattern: {
                             value: /\S+@\S+\.\S+/,
                             message: "Ваш email не подходит под нужный формат"
                           }
                       })}
                    onChange={inputLogin}
                   />
                   {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
               </div>
                <div className="form_containery">
                <input className="input_password"
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
                        onChange={inputPassword} 
                    />
                  

                {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                <div className="login">
                    <button onClick={signInWithGoogle} style={{backgroundColor : 'transparent',border:"none"}}><img src={google}alt=""width={50} height={50}/></button>
                    <img src={apple}alt="" width={38} height={44}/>
                    
                    <a href="https://m.facebook.com/login/?locale2=ru_RU"><img src={facebook}alt="" width={50} height={50}/></a>
                </div>
                <div className="form_containery">
                    <Link to='/authorization'><input className="input_login" type="submit" value="Зарегистрироватся"/></Link>
                </div>
                <div className="formAnother_container">
                    <a href=''className='p'>Забыли пароль?</a>
                </div>
            </form>
        </div>
    )

};

export default Authorization;