
const Registration = (props) => {

    return (
        <div className="form-modal">
            <div className="title-modal">Восстановления пароля</div>
            <form>
                <div className="form_container">
                    <label htmlFor="login">Введите имя</label>
                    <input type="text" name="login" placeholder="Имя"/>
                </div>
                <div className="form_container">
                    <label htmlFor="email">Введите почту</label>
                    <input type="text" name="email" placeholder="Email"/>
                </div>
                <div className="form_container">
                    <label htmlFor="firstName">Введите пароль</label>
                    <input type="text" name="firstName" placeholder="Пароль"/>
                </div>
                <div className="form_container">
                    <label htmlFor="password">Подтвердите пароль</label>
                    <input type="password" name="password" placeholder="Пароль"/>
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