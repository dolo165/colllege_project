const Email = (props) => {
    return (
        <div className="form-modal">
            <div className="title-modal">Восстановления пароля</div>
            <form>
                <div className="form_container">
                    <input type="text" name="email" placeholder="Введите почту"/>
                </div>
                <div className="form_container">
                    <input className='input_login' type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
} 
 
export default Email;