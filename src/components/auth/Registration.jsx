import React from 'react';
import rectangle from "../assets/Rectangle 108.png"
import openEye from "../assets/eye.png"
import closeEye from "../assets/глазик.png"

const Registration = (props) => {

    return (
        <div className="form-modal">
            <div className="title-modal">Регистрация</div>
            <form>
                <div className="form_container">
                    <input type="text" name="login" placeholder="Имя"/>
                </div>
                <div className="form_container">
                    <input type="text" name="email" placeholder="Email"/>
                </div>
                <div className="form_containers">
                    <input type="text" className='login_name' name="firstName" placeholder="Пароль"/>
                    <img src={closeEye} alt="" width={25} height = {25}/>                
                </div>
                <div className="form_containers">
                    <input type="password" className='login_name' name="password" placeholder="Пароль"/>
                    <img src={closeEye} alt="" width={25} height = {25}/>
                </div>
                <div className="formOne_container">
                    <img src={rectangle} alt=""  width={23} height={23}/>
                    <p className="quest_p">Да,я согласен(а) получить информацию о<br /> новых поступлениях , акциях и распродажах</p>
                </div>
                <div className="formOne_container">
                    <img src={rectangle} alt=""  width={23} height={23}/>
                    <p className="quest_p">Запомнить меня</p>
                </div>
                <div className="form_container">
                    <label htmlFor="submit"></label>
                    <input className="input_login" type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )

};

export default Registration;