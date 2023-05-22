import Button from "../components/ui/Button";
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import navigate from '../components/assets/navigate_next.png'
import { auth } from '../firebase'
import person from '../components/assets/person.png'
import {useContext} from 'react'
import {ModalContext} from '../App'
import { Link } from 'react-router-dom'
import main from '../assets/main.jpg'
import Registration from "../components/auth/Authorization";

const Main = (props) => {
    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }
    const [user, loading, error] = useAuthState(auth)
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

    } 
};


export default Main;