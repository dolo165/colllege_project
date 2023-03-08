import icon from '../assets/Group.png'
import mall from '../assets/local_mall.png'
import search from '../assets/search.png'
import notification from '../assets/notifications.png'
import person from '../assets/person.png'
import navigate from '../assets/navigate_before.png'
import Authorization from '../auth/Authorization'

const Header = (Props) => {
    return (
        <header>
            <nav className='container_nav'>
                <ul className='header_ul'>
                    <li className='header_li'>Каталог</li>
                    <li className='header_li'>Бренды</li>
                    <li className='header_li'>Новинки</li>
                    <li className='header_li'>Контакты</li>
                </ul>
                
                <div className='header_icon'>
                    <img src={icon} alt="" />
                </div>

                <ul className='header_assets'>
                    <li className='header_li'>
                        <img src={search} alt=""  width={42} height={42}/>
                    </li>
                    <li className='header_li'>
                        <img src={notification} alt="" width={30} height={30} />
                    </li>
                    <li className='header_li'>
                        <img src={person} alt="" width={42} height={42} />
                    </li>
                    <li className='header_li'>
                        <img src={navigate} alt="" width={30} height={30}/>
                    </li>
                    <li className='header_li'>
                        <img src={mall} alt="" width={25} height={29}/>
                    </li>
                </ul>
            </nav>

            <div className="line"></div>
        </header>
    );
};

export default Header