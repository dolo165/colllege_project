import rectangle from "../assets/Rectangle 108.png"
import openEye from "../assets/eye.png"
import closeEye from "../assets/глазик.png"
import { useForm } from "react-hook-form";
export default function createnp (props) {
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = async data =>{ console.log(data);}
    console.log(errors)
    return (
        <div className="form-modal">
            <div className="title-modal">Создайте новый пароль</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="form_containers">
                    <input className="login_name"
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                            required: "Параметр обязателен",
                            minLength: {
                              value: 7,
                              message: "Минимальная длина кода 5 символов"
                            }
                          })}
                          
                    />
                  

                {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                        {/* <img src={openEye} alt="" width={25} height = {25}/> */}
                        <img src={closeEye} alt="" width={25} height = {25}/>
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
                        {/* <img src={openEye} alt="" width={25} height = {25}/> */}
                        <img src={closeEye} alt="" width={25} height = {25}/>
                    </div>
                    <div className="formOne_container">
                    <input type="checkbox" className="coco"></input>
                    <p className="quest_p">Запомнить меня</p>
                    </div>
                <div className="form_container">
                    <input className='input_login' type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
}
 
