import { useState } from 'react'; 
import './BurgerMenu.css'; 
import close from '../assets/burger_close.png';

function BurgerMenu() { 
  const [isOpen, setIsOpen] = useState(false); 
 
  const handleToggle = () => setIsOpen(!isOpen); 
 
  return ( 
    <div className="burger-menu"> 
      <div className="burger-menu-icon" onClick={handleToggle}> 
        <div className={`burger-menu-line ${isOpen ? 'open' : ''}`}></div> 
        <div className={`burger-menu-line ${isOpen ? 'open' : ''}`}></div> 
        <div className={`burger-menu-line ${isOpen ? 'open' : ''}`}></div> 
      </div> 
      <div className={`burger-menu-content ${isOpen ? 'open' : ''}`}> 
        <div className="btnclose" onClick={handleToggle}>
          <img src={close} alt="" />
        </div> 
        <ul className="burger-menu-list"> 
          <li className="burger-menu-item">
            <a href="/" className="burger-menu-link">Главная</a>
          </li> 
          <li className="burger-menu-item">
            <a href="/catalog" className="burger-menu-link">Каталог</a>
          </li>
          <li className="burger-menu-item">
            <a href="/brands" className="burger-menu-link">Бренды</a>
          </li>
          <li className="burger-menu-item">
            <a href="/feedback" className="burger-menu-link">Отзывы</a>
          </li>
          <li className="burger-menu-item">
            <a href="/delivery" className="burger-menu-link">Доставка</a>
          </li>
        </ul> 
      </div> 
    </div> 
  ); 
} 
 
export default BurgerMenu;