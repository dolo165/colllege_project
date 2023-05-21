import React from "react";
import Modal from "../components/Modal";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../app/firebase";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {ContextBox} from '../App'
import { Link } from 'react-router-dom';
const ProductView = (props) => {
    const id = useParams()
    
    const [product, setProducts] = useState([])
    const [box, setBox] = useContext(ContextBox)
    useEffect(() => {
        getData()
    }, [])
    console.log(id)
    async function getData() {
       
        
        const q = query(collection(database, "products"), where("id", "==",id.productView ));
        const allProduct = await getDocs(q)
        let product = []
       
        allProduct.forEach((doc) => {
            product.push({...doc.data(), id: doc.id})
        })
        setProducts(product)
       
    

    function addToCart(event) {
        const currentCard = event.currentTarget.closest('.card')

        if (box.find(item => item.id === currentCard.querySelector('.id-card').dataset.id)) {
            const index = box.findIndex(item => item.id === currentCard.querySelector('.id-card').dataset.id)
            let nexBox = box;
            nexBox[index].count++;
            setBox(nexBox)
        } else {
            setBox([
                ...box,
                {
                    image: currentCard.querySelector('.card-img-top').getAttribute('src'),
                    title: currentCard.querySelector('.card-title').innerHTML,
                    description: currentCard.querySelector('.card-text').innerHTML,
                    price: currentCard.querySelector('.text-muted').innerHTML,
                    id: currentCard.querySelector('.id-card').dataset.id,
                    count: 1
                }
            ])
        }
    }
    console.log(product)
    const viewProducts = product.map((product, index) => {
        return (
            
            <Link  to="/product">
                <Card text="123123" key={index}>
                <div className="id-card" data-id={product.id}></div>
                <Card.Img variant="top" src={product?.photo} />
                <Card.Body>
                   <Card.Title>{product.name}</Card.Title>
                    { <Card.Text>
                    {product.discription}
                    </Card.Text> }
                </Card.Body>
                {/* <Card.Footer> */}
                <small className="text-muted"><span className="price-product">{product.price}</span>$</small>
                    <Link to='/productView'>
                        {/* <div className="add_button">
                            <button>Добавить в корзину</button>
                        </div>   */}
                    </Link>
                {/* </Card.Footer> */}
            </Card>
            </Link>

        )
    })

    return (
        <div>
        <Header />
        <div className="container">
          
          <CardGroup>
            {viewProducts}
          </CardGroup>
        </div>
        <Footer />
      </div>
    )
};
};
export default ProductView;