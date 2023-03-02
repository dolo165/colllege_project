import { useForm } from "react-hook-form";

export default function Email (props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data =>{ console.log(data);}
    console.log(errors)
    return (
        <div className="form-modal">
            <div className="title-modal">Восстановления пароля</div>
            <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_container">
                <input className="input_email"
                 type="text" 
                 name="email" 
                 placeholder="Введите почту"  
                 {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Ваш email неправильный"
                            }
                        })}

                    />
                {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                </div>
                <div className="form_container">
                    <input className='input_login' type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
} 
 
