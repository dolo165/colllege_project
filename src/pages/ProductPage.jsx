import React from 'react';
import { Link } from 'react-router-dom';
import { collection, query, getDocs} from "firebase/firestore";
import { database } from "../app/firebase";
import {useState, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ProductPage(props) {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData();
    }, [])

    console.log(categories)

    async function getData() {
        const q = query(collection(database, "category"));
        const querySnapshot = await getDocs(q);
        let category = []
        querySnapshot.forEach((doc) => {
           category.push({...doc.data(), id: doc.id})
           console.log(doc.id)
        });
        setCategories(category)
        
    }

    const showAllCategory = categories.map((category, index) => {
    return (
        <div className='catalog_container'>
            <Link to={`/category/${category.id}`}>
                    <Card text="qwerty" key={index}>
                        <Card.Img variant="top" src={category?.photo} />
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <Card.Text>
                                {category.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
        </div>
    );
    })
    return (
        <div>
            <div className="catalog_container">
                <CardGroup>
                    {showAllCategory}
                </CardGroup>
            </div>
        </div>
    )
}

export default  ProductPage;