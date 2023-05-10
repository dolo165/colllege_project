import Button from "../components/ui/Button";
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import navigate from '../components/assets/navigate_next.png'
import { auth } from '../app/firebase'
import person from '../components/assets/person.png'
import {useContext} from 'react'
import {ModalContext} from '../App'
import { Link } from 'react-router-dom'
import main from '../assets/main.jpg'

const Main = (props) => {
    const [user, loading, error] = useAuthState(auth);
    const [modal, dispatch] = useContext(ModalContext)

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }

    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }
    
    const signOut = () => {
        auth.signOut();
    };
    if (user){
    
        if (user.emailVerified) {
        return (
            <div className="container center-flex">
                Главная страница
                <div>Поздравляю, вы вошли в свой аккаунт {user.displayName}</div>
                <div>Ваша почта: {user.email}</div>
                <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div>
            </div>
        )
    } else 
        return (
            <div className="container center-flex">
                Главная страница
                <div>Пожалуйста потвердите почту умоляю{user.displayName}</div>
                <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div>
            </div>
        )

    } else  

    return (
        <div className="container center-flex">
            <h1 className="main_h1">Пришло время <br /> позаботиться <br /> о себе</h1>
            <div className="main_direct">      
                <Link className="main_direct" to="/catalog">
                    <a className='h3' href="">Перейти в каталог</a> 
                    <img src={navigate} alt="" width={50} height={50}/>
                </Link>      
            </div>
            {/* <div className="main_photo">
                <img src={main} alt="" />
            </div> */}
            <Modal modal={modalState}/>
        </div>

    );
};


export default Main;