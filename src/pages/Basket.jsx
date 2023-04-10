import React from 'react';
import logo from '../components/assets/logo.png'
import nav from '../components/assets/nav_next.png'
import down from '../components/assets/nav_down.png'
import left from '../components/assets/nav_left.png'
import powder from '../components/assets/powder.png'
import cream from '../components/assets/cream.png'
import mask from '../components/assets/mask.png'
import { Link } from 'react-router-dom'


function Basket(props) {
    return (
        <div className='basket_container'>
         <div class="menu-btn">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
                </div>
         {/* <div className='basket_logo'>
            <img src={logo} alt="" />
        </div > */}

        <div className='menu'>
            <div className='head_ul'>
                <li>Корзина</li>
                    <img src={nav} alt="" />
                <li>Информация</li>
                    <img src={nav} alt="" />
                <li>Перевозки</li>
                    <img src={nav} alt="" />
                <li>Оплата</li>
            </div>
        </div>
        
        
        <div  className='basket_container'>
        <div className='head_info'>
            <h1 className='h1'>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
            <input className='input_mail' type="text" placeholder="Электронная почта" />
        </div>

        <div className='checkbox_text'>
            <input type="checkbox" className='checkbox' id="" /> Пишите мне с новостями и предложениями
        </div>

        <div className='head_delivery'>
            <h2 className='h2'>АДРЕС ДОСТАВКИ</h2>
            <div className='input_delivery_div'>
            <input className='input_delivery' type="text" placeholder='Страна/регион'  /> 
            <img className='nav_down' src= {down} alt="" />

        </div>
           
        <div className='name_surname'>            
            <input className='input_imya' type="text" placeholder='Имя'/> 
            <input className='input_surname' type="text" placeholder='Фамилия' />
        </div>

            <div className='adres_div'>
            <input className='input_adres' type="text" placeholder='Адрес' />

            </div>

            <div className='div_apart'>
                <input className='input_apart' type="text" placeholder='Квартира,люкс и т.д. (по желанию)' />
            </div>
            <div className='div_index'>
                <input className='input_index' type="text" placeholder='Почтовый индекс' />

            </div>

            <div className='div_number'>
                <input className='input_number' type="text" placeholder='Телефон' />
            </div> 

            <div className='checkbox_text'>
                <input type="checkbox" className='checkbox' id="" /> Сохраните эту информацию для следующего раза
            </div>
            <Link to='/product'>
            <div className='back'>
                <p> <img src= {left} alt="" /> Вернуться в корзину </p>
            </div>
            </Link>
        </div>
        
        <div className='products_powder'>
            <img  src={powder} alt=""  /> 
            <p className='powder_text'>Светящийся порошок</p>
            <p className='powder_price'> 1520 сом</p>
        </div>
        

        <div className='products_cream'>
            <img src={cream} alt="" />
            <p className='cream_text'>Крем для глаз</p>
            <p className='cream_price'>2080 сом</p>

        </div>


        <div className='products_mask'> 
            <img src={mask} alt="" />
            <p className='mask_text'>МАСКА ДЛЯ СВЕТЯЩЕЙСЯ МАСКИ <br />AHA+ENZYME</p>
            <p className='mask_price'>3280 сом</p>

        </div>

        <hr className='gg_line' />

        <div className='div_card'>
            <div className='input'>
                <input className='input_card' type="text" placeholder='Подарочная карта или код скидки' /> <button className='card_button'>Применять</button>
            </div>


       <div className='total_div'>
       <p className='total_text'>Промежуточный итог</p>
        <p className='total_price'>6880 СОМ</p>

       </div>
      

        <div className='div_perevozki'>
        <p className='text_perevozki'>Перевозки</p>
        <p className='text_step'>  Рассчитывается на следующем шаге</p>

        </div>
        <hr className='gg_line' />
        <div className='total_price_point'>
            <p className='text_total_price'>Общий</p>
            <p className='price_point'>6880 СОМ</p>

        </div>
        </div>
        </div>
        </div>
   
    );
}

export default Basket;