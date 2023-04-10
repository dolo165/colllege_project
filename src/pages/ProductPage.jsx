import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import hydro from '../components/assets/hydro.png'

const ProductPage = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json => {
                setProduct(json)
            })
    }, [])

    console.log(product)

    return (
        <div>
            {/* <Header /> */}
            <div className="back_product"><Link to={'/products'}> Вернуться назад</Link></div>
            <div className="product_page">
                    <div className="product-image">
                        <img src={hydro} alt="" />
                    </div>
                <div className="product-info">
                    <div className="product-text">
                        <div className="product-title">
                        Дуэт Hydro Cellular
                        </div>
                        <div className="product-price">
                                 4 020,00
                            </div>
                        <div className="product-description">
                        Увлажняющая сыворотка с невидимым SPF 30 не <br /> ощущается, но подходит lля всего.
                        </div>
                        <div className="product-buttons">
                            
                            <div className="product-buy">
                                <Link to='/basket'><button className="good_buton">Купить</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
};

export default ProductPage;