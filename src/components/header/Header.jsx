import icon from '../assets/Group.png'
import mall from '../assets/local_mall.png'
import search from '../assets/search.png'
import notification from '../assets/notifications.png'
import person from '../assets/person.png'
import navigate from '../assets/navigate_before.png'
import Authorization from '../auth/Authorization'
import Button from "../ui/Button";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ModalContext } from '../../App'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../app/firebase'

const Header = (Props) => {
    const [user] = useAuthState(auth)
    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }
    const [modal, dispatch] = useContext(ModalContext)

    async function openModal() {
        await dispatch({type: 'content', content: 'authorization'})
        await dispatch({type: 'modal', modal: true})
    }
    
    return (
        <header>
            <nav className='container_nav'>
            <div className="menu-btn">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                <div className="menu">
                  <nav className='nav'>
                    <ul className='header_ul'>
                         <li>Каталог</li>
                        <li>Бренды</li>
                        <li>Новинки</li>
                        <li>Контакты</li>
                    </ul>
                  </nav>
                </div>
                <ul className='header_ul'>
                    <Link to="/catalog">Каталог</Link>
                    <li className='header_li'>Бренды</li>
                    <li className='header_li'>Новинки</li>
                    <li className='header_li'>Контакты</li>
                </ul>
                
                <div className='header_icon'>
                    <img src={icon} alt="" />
                </div>

                <ul className='header_assets'>
                {/* <div onClick={() => openModal('authorization')}>
                    <Button text='Авторизация' />
                </div>
                <div  onClick={() => openModal('registration')}>
                    <img src={person} alt="" width={42} height={42} />
                    <Button />
                </div> */}
                    <li className='header_li'>
                        <img src={search} alt=""  width={42} height={42}/>
                    </li>
                    <li className='header_li'>
                        <img src={notification} alt="" width={30} height={30} />
                    </li>
                    <li className='header_li'>
                        {/* <img src={person} alt="" width={42} height={42} /> */}
                        {user
                            ? (
                                <div className='modal_icon'>
                                    <Link to="/profile"><img src={person} alt="" width={42} height={42} /></Link>
                                </div> 
                            )
                            :   (
                                <div className='modal_icon' onClick={openModal}>
                                    <img src={person} alt="" width={42} height={42} />
                                </div> 
                            )
                        }
                        
                    </li>
                    <li className='header_li'>
                        <img src={navigate} alt="" width={30} height={30}/>
                    </li>
                    <li className='header_li'>
                        <img src={mall} alt="" width={25} height={29}/>
                    </li>
                </ul>
            </nav>
            {/* <Modal modal={modalState}/> */}

            <div className="line"></div>
        </header>
    );
};

export default Header