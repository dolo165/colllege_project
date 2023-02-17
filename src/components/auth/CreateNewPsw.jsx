import rectangle from "../assets/Rectangle 108.png"
import openEye from "../assets/eye.png"
import closeEye from "../assets/глазик.png"

const CreateNewPsw = (props) => {
    return (
        <div className="form-modal">
            <div className="title-modal">Создайте новый пароль</div>
            <form>
                <div className="upper_form">
                    <div className="form_containers">
                        <input type="password" name="email" placeholder="Введите пароль"/>
                        <img src={openEye} alt="" width={25} height = {25}/>
                        <img src={closeEye} alt="" width={25} height = {25}/>
                    </div>
                    <div className="form_containers">
                        <input type="password" name="email" placeholder="Подтвердите паролю пароль"/>
                        <img src={openEye} alt="" width={25} height = {25}/>
                        <img src={closeEye} alt="" width={25} height = {25}/>
                    </div>
                    <div className="formOne_container">
                        <img src={rectangle} alt=""  width={23} height={23}/>
                        <p className="password">Запомнить меня</p>
                    </div>
                </div>
                <div className="form_containers">
                    <input className='input_login' type="submit" name="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
}
 
export default CreateNewPsw;