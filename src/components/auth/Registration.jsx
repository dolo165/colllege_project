
import rectangle from "../assets/Rectangle 108.png"
import openEye from "../assets/eye.png"
import closeEye from "../assets/глазик.png"
import {useForm} from "react-hook-form";
const Registration = (props) => {
   
    const {register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)
   

    return (
        <div className="form-modal">
            <div className="title-modal">Регистрация</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_container">
                <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Введите ваше имя" 
                        
                        {...register('firstName', {
                            required: "Параметр обязателен", 
                            maxLength: {
                                value: 20,
                                message: 'Ваше имя должно быть меньше 20 символов'
                            }, 
                            minLength: {
                                value: 3,
                                message: 'Ваше имя должно быть больше 3 символов'
                            } 
                             
                        })}
                        
                    />
                   
                    {errors.firstName && <span className="error" role="alert">{errors.firstName?.message}</span>}
                   
                </div>
                
                <div className="form_container">
                   
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Введите почту"
                        {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Ваш email не подходит под нужный формат"
                            }
                        })}

                    />
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div>
                <div className="form_container">
                    
                    <input 
                        type="text" 
                        name="login" 
                        placeholder="Введите логин"
                        {...register("login", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /[A-Za-z]/,
                              message: "Логин должен содержать только латинские символы"
                            },
                            maxLength: 20, 
                            minLength: 3
                        })}
                    />
                    {errors.login && <span className="error" role="alert">{errors.login?.message}</span>}
                </div>
                <div className="form_containers">
                    
                    <input className="login_name"
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Параметр обязателен",
                            minLength: {
                              value: 5,
                              message: "Минимальная длина пароля 5 символов"
                            }
                          })}
                          
                    />
                    {/* <img src={closeEye} alt="" width={25} height = {25}/> */}
                    {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                <div className="form_containers">
                    <input className="login_name" 
                        type="password" 
                        name="cpassword" 
                        placeholder="Повторите пароль"
                        {...register("cpassword", {
                            validate: (value) => {
                                if (watch('password') != value) {
                                    return "Ваши пароли не совпадают";
                                }
                            },
                            required: 'Параметр обязателен'
                        })}
                    />
                     {/* <img src={closeEye} alt="" width={25} height = {25}/> */}
                    {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
                </div>
                <div className="formOne_container">
                    <input type="checkbox" className="coco"></input>
                    <p className="quest_p">Да,я согласен(а) получить информацию о<br /> новых поступлениях , акциях и распродажах</p>
                </div>
                <div className="formOne_container">
                <input type="checkbox" className="coco"></input>
                    <p className="quest_p">Запомнить меня</p>
                </div>
                <div className="form_container">
                    <input className="input_login" type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )

};



export default Registration;