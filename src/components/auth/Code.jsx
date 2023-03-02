import { useForm } from "react-hook-form";

export default function Code (props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data =>{ console.log(data);}
    console.log(errors)
    return (
        <div className="form-modal">
            <div className="title-modal">Введите код</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_container">
                    <input className="input_password"
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
                </div>
                <div className="form_container">
                    <input className='input_login' type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
} 
 