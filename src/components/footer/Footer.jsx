import icon from '../assets/Group.png'


const Footer = (Props) => {
    return (
        <footer>

            <div className='footer_content'>


            <div className='footer_icon'>
           <img src={icon} alt="" />
            </div>

<p className='new_collection'>подписаться на обновления:</p>
<input type="text"  placeholder='введите e-mail'/> <button>подписаться</button>

<p className='footer_reg'>регистрируясь вы соглашаетесь с нашими условиями</p>

<div className='terms'>
    <ul>
        <li>доставка</li>
        <li>оплата</li>
        <li>контакты</li>
    </ul>
</div>

<div className='terms_2'>

    <ul>
        <li>отзывы</li>
        <li>сертификаты</li>
        <li>каталог</li>
    </ul>

</div>
<div className="line"></div>

            </div>






        </footer>
    );
};

export default Footer