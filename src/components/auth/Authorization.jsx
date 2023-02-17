
import facebook from '../assets/facebookIcon.png';
import apple from '../assets/appleIcon.png';
import google from '../assets/googleIcon.png';

const Authorization = (props) => {
    return (
        <div className="form-modal">
            <div className="title-modal">Вход в личный кабинет</div>
            <form>
                
                <div className="formAnother_container">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" placeholder="Введите пароль"/>
                </div>
                <div className="login">
                    <img src={google}alt="" width={50} height={50}/>
                    <img src={apple}alt=""width={38} height={44} />
                    <img src={facebook}alt="" width={50} height={50}/>
                </div>
                <div className="formAnother_container">
                    <label htmlFor="login"></label>
                    <input className="input_login" type="submit" value="Войти"/>
                </div>
                <div className="formAnother_container">
                    <a href='/' className='p'>Забыли пароль?</a>
                </div>
            </form>
        </div>
    )

};

export default Authorization;