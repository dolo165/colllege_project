import Button from "../components/ui/Button";
import Modal from "../components/Modal";
import { useAuthState } from "react-firebase-hooks/auth"
import navigate from '../components/assets/navigate_next.png'
import { auth } from '../firebase'
import person from '../components/assets/person.png'
import {useContext} from 'react'
import {ModalContext} from '../App'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div className="container center-flex">
        <h1 className="main_h1">Пришло время <br /> позаботиться <br /> о себе</h1>
        <div className="main_direct">      
            <Link className="main_direct" to="/catalog">
                <a className='h3' href="">Перейти в каталог</a> 
                <img src={navigate} alt="" width={50} height={50}/>
            </Link>      
        </div>
    </div>
    );
}

export default Home;