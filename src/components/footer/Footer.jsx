import icon from '../assets/Group.png'
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom'

export default function Footer (props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data =>{ console.log(data);}
    console.log(errors)
    return (
        <footer>

            <div className='footer_content'>


            <div className='footer_icon'>
                <a href="/">
                    <img src={icon} alt=""  width={163} height={63}/>
                </a>
            </div>

                <p className='new_collection'>подписаться на обновления:</p>
            <Link to='/'>
                <div className='footer_follow' onSubmit={handleSubmit(onSubmit)}>
                    <input className='footer_input'   placeholder='введите e-mail'
                    type="text" 
                    name="send"
                    {...register("send", {required: "Параметр обязателен",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Ваш email неправильный"
                        }
                    })}

                />
                {errors.send && <span className="error" role="alert">{errors.send?.message}</span>} 
                
                    <input type='submit' placeholder='подписаться' className='footer_button' name="submit" value="Отправить" ></input>
                </div>
            </Link>
            
            

            <p className='footer_reg'>регистрируясь вы соглашаетесь с нашими условиями</p>

            <div className='terms'>
                <ul className='footer_ul'>
                    <Link to='/delivery'><a className='footer_li' href="">доставка</a></Link>
                    {/* <Link to='/'><a className='footer_li' href="">оплата</a></Link> */}
                    <Link to='/Contacts'><a className='footer_li' href="">контакты</a></Link>
                    <Link to='/feedback'><a className='footer_li' href="">отзывы</a></Link>
                    {/* <Link to='/'><a className='footer_li' href="">сертификаты</a></Link> */}
                    <Link to='/catalog'><a className='footer_li' href="">каталог</a> </Link>
                </ul>
            </div>

            {/* <div className='terms'>

                <ul className='footer_ul'>
                    <Link to='/feedback'><a className='footer_li' href="">отзывы</a></Link>
                    <Link to='/'><a className='footer_li' href="">сертификаты</a></Link>
                    <Link to='/catalog'><a className='footer_li' href="">каталог</a> </Link>
                </ul>

            </div> */}
            <div className="footer_line"></div>

            </div>
        </footer>
    );
};
