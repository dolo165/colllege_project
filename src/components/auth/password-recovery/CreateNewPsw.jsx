// import Rectangle from "./assets/Rectangle 108.png"

const CreateNewPsw = (props) => {
    return (
        <div className="form-modal">
            <div className="title-modal">Создайте новый пароль</div>
            <form>
                <div className="form_container">
                    <input type="text" name="email" placeholder="Введите пароль"/>
                </div>
                <div className="form_container">
                    <input type="text" name="email" placeholder="Подтвердите паролю пароль"/>
                </div>
                <div className="form_container">
                    {/* <img src={Rectangle} alt="" />
                    <p className="password">Запомнить меня</p> */}
                </div>
                <div className="form_container">
                    <input className='input_login' type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
}
 
export default CreateNewPsw;