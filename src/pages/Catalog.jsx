import React from 'react';
import harper from '../components/assets/harper.png'
import pexels from '../components/assets/pexels.png'
import face from '../components/assets/faces.png'
import body from '../components/assets/bodyes.png'
import cary from '../components/assets/care.png'
import set from '../components/assets/sets.png'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import { ModalContext } from '../App';
import {useContext} from 'react'

function catalog(props) {
    const [modal, dispatch] = useContext(ModalContext)

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }

    
    return (
        
        <div className='catalog_container'>
            <div className='catalogs'>
                <Link to='/products'>
                <div className='item'>
                    <img src={harper} alt="" />
                    <p className='catalog_p'>Новинки</p>
                </div>
                </Link>
                
                <Link to='/products'>
                <div className='item'>
                    <img src={pexels} alt="" />
                    <p className='catalog_p'>Бестселлеры</p>
                </div>
                </Link>

                <Link to='/products'>
                <div className='item'>
                    <img src={face} alt="" />
                    <p className='catalog_p'>Для лица</p>
                </div>
                </Link>

                <Link to='/products'>
                <div className='item'>
                    <img src={body} alt="" />
                    <p className='catalog_p'>Для тела</p>
                </div>
                </Link>

                <Link to='/products'>
                <div className='item'>
                    <img src={cary} alt="" />
                    <p className='catalog_p'>Уход</p>
                </div>
                </Link>


                <Link to='/products'>
                <div className='item'>
                    <img src={set} alt="" />
                    <p className='catalog_p'>Наборы</p>
                </div>
                </Link>
            </div>
            <Modal modal={modalState}/>
        </div>
    
    );
}

export default catalog;