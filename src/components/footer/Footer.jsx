import icon from '../assets/Group.png'
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom'
import instagram from '../../components/assets/icon _instagram fill_.png'
import facebook from '../../components/assets/icon _facebook fill_.png'
import gmail from '../../components/assets/icon _google fill_.png'
import phone from '../../components/assets/icon _phone_.png'

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

            {/* <div className="footer_line"></div> */}

            {/* <div className='footer_center'>
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

            </div> */}
                
            <div className='terms'>
                <div className="terms_header">
                    Информация
                </div>
                <ul className='footer_ul'>
                    <Link to='/delivery'><a className='footer_li' href="">доставка</a></Link>
                    <Link to='/contacts'><a className='footer_li' href="">контакты</a></Link>
                    <Link to='/feedback'><a className='footer_li' href="">отзывы</a></Link>
                    <Link to='/catalog'><a className='footer_li' href="">каталог</a> </Link>
                </ul>
            </div>

            <div className="terms">
                <div className="terms_header">
                    Контакты
                </div>
                <ul className='footer_ul'>
                    <Link to='/'><a className='footer_li' href="mailto:avebeauty@mail.kg"><img src={gmail} alt="" />Gmail</a></Link>
                    <Link to='/'><a className='footer_li' href="https://ru-ru.facebook.com/"><img src={facebook} alt="" />Facebook</a></Link>
                    <Link to='/'><a className='footer_li' href=""><img src={instagram} alt="https://www.instagram.com/" />Instagram</a></Link>
                    <Link to='/'><a className='footer_li' href="tel:+996555004466"><img src={phone} alt="" />Номер</a> </Link>
                </ul>
            </div>
            </div>
        </footer>
    );
};
