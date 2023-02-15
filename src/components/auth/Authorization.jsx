import React from 'react';
// import Apple from './src/assets/appleIcon.png';

const Authorization = (props) => {
    return (
        <div className="form-modal">
            <div className="title-modal">Вход в личный кабинет</div>
            <form>
                <div className="form_container">
                    <label htmlFor="login"></label>
                    <input type="text" name="login" placeholder="Email"/>
                </div>
                <div className="form_container">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" placeholder="Введите пароль"/>
                </div>
                {/* <div className="login">
                    <img src={Apple}alt="" />
                </div> */}
                {/* не смог добавить картинки */}
                <div className="form_container">
                    <label htmlFor="login"></label>
                    <input className="input_login" type="submit" value="Войти"/>
                </div>
                <div className="form_container">
                    <p className='password'>Забыли пароль?</p>
                </div>
            </form>
        </div>
    )

};

export default Authorization;