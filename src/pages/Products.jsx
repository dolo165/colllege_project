import React from 'react';
import hydro from '../components/assets/hydro.png'
import ordin from '../components/assets/ordin.png'
import wet from '../components/assets/wet.png'
import nia from '../components/assets/nia.png'
import refine from '../components/assets/refine.png'
import babr from '../components/assets/babr.png'
import ceur from '../components/assets/ceur.png'
import oca from '../components/assets/oca.png'
import cler from '../components/assets/cler.png'
import toner from '../components/assets/toner.png'
import bioderm from '../components/assets/bioderm.png'
import atoderm from '../components/assets/atoderm.png'
import lotio from '../components/assets/lotion.png'
import sensh from '../components/assets/sensh.png'
import pigmento from '../components/assets/pigmento.png'
import deter from '../components/assets/deter.png'
import borat from '../components/assets/borat.png'
import oils from '../components/assets/oils.png'
import { Link } from 'react-router-dom'

import Modal from '../components/Modal';
import { ModalContext } from '../App';
import {useContext} from 'react'

function Products(props) {
    const [modal, dispatch] = useContext(ModalContext)

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }


    return (
        
        <div className='products'>
           
           <div>
           <header className='goods_header'><Link to='/catalog'><h1 className='goods_p'>Каталог</h1></Link></header>
           </div>
            <div className="products_container">

            
           <div className='first_line'>
           <Link to='/product'>
            <div className='product'>

                <img  src={hydro} alt=""  width={262}  /> 
                <li className='item_price'>15 660c</li>
                <li className='item_name'>Дуэт Hydro Cellular</li>
                <li><button className='good_buton'>оформить заказ</button></li>

            </div>
            </Link>
            <Link to='/product'>
            <div className='product'>
                <img src={ordin} alt="" />
                <li className='item_price'>1300с</li>
                    <li className='item_name'>Очищающее средство <br /> с глюкозидом</li>
                    <li><button className='good_buton'>оформить заказ</button></li>


            </div>
            </Link>
            <Link to='/product'>
            <div className='product'>
                <img src={wet} alt="" />
                <li className='item_price'>1100с</li>
                <li className='item_name'>Крем Natural Moiusturizing <br /> Factors-PhytoCeramides</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
            </Link>



           </div>

            <div className='second_line'>
            <Link to='/product'>

                <div className='product'>
                <img src={nia} alt="" width={261} />
                <li className='item_price'>1300c</li>
                <li className='item_name'>1% Ниацинамид 10% + <br /> Цинк 1%</li>
                <li><button className='good_buton'>оформить заказ</button></li>
                </div>
            </Link>

            <Link to='/product'>
            <div className='product'>
                <img src={refine} alt="" />
                <li className='item_price'>7000c</li>
                <li className='item_name'>Тоник с AHA и BHA <br /> кислотами REFINE <br /> CELLULAR в travel <br /> формате 30мл.</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
            </Link>
            <Link to='/product'>
            <div className='product'>
                <img src={babr} alt="" />
                <li className='item_price'>8080c</li>
                <li className='item_name'>Набор для век День & <br /> Ночь Lifting Cellular</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
            </Link>

           </div>

           <div className='third_line'>
           <Link to='/product'>
            <div className='product'>
                <img src={ceur} alt="" width={276} />
                <li className='item_price'>1015c</li>
                <li className='item_name'>Энзимная пудра <br />
Dr Ceuracle Pro Balance <br /> Morning Enzyme Wash</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
            </Link>

            <Link to='/product'>
            <div className='product'>
                <img src={oca} alt="" width={261} />der_icon
                <li className='item_price'>2246c</li>
                <li className='item_name'>Солнцезащитный крем с <br /> центолой SPF 50+ PA++++ <br /> Dr. Ceuracle</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
            </Link>
            <Link to='/product'>
            <div className='product'>
                <img src={cler} alt="" />
                <li className='item_price'>2100с</li>
                <li className='item_name'>Солнцезащитный <br /> осветляющий крем с <br /> пробиотиками Dr. <br /> Ceuracle, 50мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>
            </Link>
           </div>
            </div>

           {/* <div className='fourth_line'>
             
             <div className='product'>
                <img src={toner} alt="" />
                <li className='item_price'>2800с</li>
                <li className='item_name'>Себорегулирующий <br /> тонер для лица “5-альфа <br /> контроль”</li>
                <li><button className='good_buton'>оформить заказ</button></li>
             </div>

             <div className='product'>
                <img src={bioderm} alt="" width={280} />
                <li className='item_price'>2300с</li>
                <li className='item_name'>Bioderma Atoderm <br /> Бальзам Интенсив, 500 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>
             </div>


             <div className='product'>
                <img src={atoderm} alt="" />
                <li className='item_price'>3540с</li>
                <li className='item_name'>Себорегулирующий крем <br /> «5-альфа контроль»</li>
                <li><button className='good_buton'>оформить заказ</button></li>

             </div>

           </div>


           <div className='fifth_line'>
            <div className='product'>
                <img src={sensh} alt="" width={260} />
                <li className='item_price'>1680с</li>
                <li className='item_name'>Bioderma Sensibio H2O <br /> Мицеллярная вода, 500 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>


            </div>

<div className='product'>

    <img src={lotio} alt="" width={260} />
    <li className='item_price'>2200с</li>
    <li className='item_name'>Sébium Лосьон</li>
    <li><button className='good_buton'>оформить заказ</button></li>





</div>
        <div className='product'>
            <img src={pigmento} alt="" />
            <li className='item_price'>3300с</li>
            <li className='item_name'> Pigmentbio Осветляющая <br /> сыворотка С-Concentrate </li>
            <li><button className='good_buton'>оформить заказ</button></li>

        </div>


           </div>

           <div className='sixth_line'>
            <div className='product'>
                <img src={deter} alt="" />
                <li className='item_price'>2600с</li>
                <li className='item_name'>Кератиновая увлажняющая <br /> маска для волос KT LD <br /> REHYDRATING MASK, 200 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>
            </div>

            <div className='product'>
            <img src={oils} alt="" />
                <li className='item_price'>2870с</li>
                <li className='item_name'>Кератиновое масло для <br /> волос KT LD THE OIL, 50 мл</li>
                <li><button className='good_buton'>оформить заказ</button></li>

            </div>  

            <div className='product'>
              <img src={borat} alt="" />
                
                <li className='item_price'>1800c</li>
                <li className='item_name'>Кератиновая сыворотка <br /> для волос KT LD KERATIN <br /> SERUM, 125 мл </li>
                <li className=''><button className='good_buton'>оформить заказ</button></li>
            </div>
           </div> */}

         
       

        </div>
    );
}

export default Products;