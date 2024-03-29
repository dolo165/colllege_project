import icon from '../assets/Group.png'
import mall from '../assets/local_mall.png'
import person from '../assets/person.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ModalContext } from '../../App'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import BurgerMenu from '../header/BurgerMenu'

const Header = (Props) => {
    const [user] = useAuthState(auth)
    console.log(user)
    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }
    const [modal, dispatch] = useContext(ModalContext)

    async function openModal() {
        console.log('yyyy')
        await dispatch({type: 'content', content: 'registration'})
        await dispatch({type: 'modal', modal: true})
    }

    async function openMall() {
        await dispatch({type: 'content', content: 'basket'})
        await dispatch({type: 'modal', modal: true})
    }
    
    


    return (
        <header>
            <nav className='container_nav'>

                <div className="menu">
                  <nav className='nav'>
                    <ul className='header_ul'>
                        <li>Каталог</li>
                        <li>Бренды</li>
                        {/* <li>Новинки</li> */}
                        <li>Контакты</li>
                    </ul>
                  </nav>
                </div>
                
                
                <div className='header_icon'>
                    <a href="/">
                        <img src={icon} alt="" />
                    </a>
                </div>
                <ul className='header_ul'>
                            <Link  to="/catalog"><a className='header_li' href="">Каталог</a> </Link>
                            <Link  to="/feedback"><a className='header_li' href="">Отзывы</a></Link>
                            <Link  to="/brands"><a className='header_li' href="">Бренды</a></Link>
                            <Link  to="/contacts"><a className='header_li' href="">Контакты</a></Link>
                        </ul>
                <ul className='header_assets'>
                    <li className='header_li'>
                        <Link to="/registration"><img src={person} alt="" width={40} height={40} /></Link>  
                    </li>
                    <li className='header_li'>
                            <Link to="/basket"><img src={mall} alt="" width={29} height={32} /></Link>
                    </li>
                </ul>
                <BurgerMenu />
            </nav>
            {/* <Modal modal={modalState}/> */}

            <div className="line"></div>
        </header>
    );
};

export default Header;