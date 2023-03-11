import Button from "../components/ui/Button";
import {useReducer} from 'react'
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import navigate from '../components/assets/navigate_next.png'
import { auth } from '../app/firebase'
const Main = (props) => {
    const [modal, dispatch] = useReducer(reducer, {
        active: false,
        content: 'registration'
      });
      
      const [user, loading, error] = useAuthState(auth);
    function reducer(state, action) {
        switch (action.type) {
            case 'modal':
                return {
                    ...state,
                    active: action.modal
                };
            case 'content':
                return {
                    ...state,
                    content: action.content
                };
            default:
                return state
        }
    }

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
            <h1>Пришло время <br /> позаботиться <br /> о себе</h1>
            <div className="main_direct">            
                <h3>Перейти в каталог</h3>
                <img src={navigate} alt="" width={50} height={50}/>
            </div>
             {/* <h1>Главная страница</h1> */}
            <div onClick={() => openModal('authorization')}>
                <Button text='Авторизация' />
            </div>
            <div  onClick={() => openModal('registration')}>
                <Button text='Регистрация' />
            </div>
            <div onClick={() => openModal('passwordrecovery')}>
                <Button text='Восстановление пароля' />
            </div>
            <div onClick={() => openModal('code')}>
                <Button text='Введите проверочный код' />
            </div>
            <div onClick={() => openModal('createnewpsw')}>
                <Button text='Создайть новый пароль' />
            </div>
            <Modal modal={modalState}/>
        </div>

    );
};


export default Main;