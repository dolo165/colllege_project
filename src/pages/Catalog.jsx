import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import {useState, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { collection, query, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import {Link, useParams} from 'react-router-dom'

  const Catalog = (props) => {
     const id = useParams()
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

    /*const showAllProducts = products.map((product, index) => {
        return (
            <Card text="123123">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{console.log(product)}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{product.price}$</small>
                </Card.Footer>
            </Card>
        )
    })*/

    const showAllCategory = categories.map((category, index) => {
        return (
            
            <Link to={`/category/${category.id}`}>
                
                <Card key={index}>
                    <Card.Img variant="top" src={category?.image} />
                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                        {/* <Card.Text>
                            {category.discription}
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </Link>
        )
    })
    
    return (
        <div>
            <Header />
                <div>
                    <div>
                    <div className="brands_article">
                        <Link to='/'><p>Главная</p> </Link>/<Link to='/catalog'><span>Каталог</span> </Link>
                    </div>
                        <CardGroup>
                            {showAllCategory}
                        </CardGroup>
                    </div>
                </div>
            <Footer />
        </div>
    )
};

export default Catalog;