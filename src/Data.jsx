
import { useState } from "react";
import PropTypes from 'prop-types';

const data = [
    {
        id: 1,
        name: "Fancy Product",
        price: "$40.00 - $80.00",
        isAvailable: false,
        add: false,
    },
    {
        id: 2,
        name: "Special Item",
        price: "$20.00 $18.00",
        isAvailable: true,
        add: true,

    },
    {
        id: 3,
        name: "Sale Item",
        price: "$50.00 $25.00",
        isAvailable: true,
        add: true,
    },
    {
        id: 4,
        name: "Popular Item",
        price: "$40.00",
        isAvailable: false,
        add: false,
    },
    {
        id: 5,
        name: "Sale Item",
        price: "$50.00 $25.00",
        isAvailable: true,
        add: true,
    },
    {
        id: 6,
        name: "Fancy Product",
        price: "$120.00 - $280.00",
        isAvailable: false,
        add: false,
    },
    {
        id: 7,
        name: "Special Item",
        price: "$20.00 $18.00",
        isAvailable: true,
        add: true,
    },
    {
        id: 8,
        name: "Popular Item",
        price: "$40",
        isAvailable: false,
        add: false,
    },
];

// eslint-disable-next-line no-unused-vars
const ProductDetails = ({ id, name, price, isAvailable, removeCart, addToCart, cartItems }) => {

    const rendeButtons =() =>{
        if(cartItems.includes(id)){
            return <button onClick={()=>removeCart(id)}>
                Remove cart
            </button>
        }else {
            return <button onClick={()=>addToCart(id)}>
                Add to cart
            </button>
        }
    }

    return <div style={{
        border: "1px solid",
        textAlign: "center",
        padding: "16px",
        position: "relative"

    }}>
        {isAvailable && (
            <i
                className="fa-solid fa-bag-shopping" style={{ position: "absolute", top: 10, right: 10 }}
            ></i>
        )}
        <img
            alt={name}
            style={{ height: "200px", width: "300px" }}
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        />
        <h3>{name}</h3>
        <h4>{price}</h4>
        {isAvailable ? (
            <>
            {
             rendeButtons()
            }
            </>
           
        ) : <div style={{height:30,width:100}}></div>}

    </div>
}

const Products = ({ cartItems, setCartItems}) => {
    const [cart] = useState([]);

    // const addToCart = (id) => {
    //     console.log(cartcount+1)
    //     // setCartCount({...cartcount},cartcount:cartcount +1)
    //     setcart([...cart, id]);
    // }

    const addToCart = (id) =>{
        console.log(id)
        setCartItems([...cartItems, id]);
    }

    const removeCart = (id) => {
        setCartItems(cartItems.filter((item) => item!== id));
    }

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
            gap:'10px'
        }}>


            {data.map((pro) => {
                return <ProductDetails key={pro.id} {...pro}
                    add={cart.includes(pro.id)}
                    addToCart={addToCart}
                    removeCart={removeCart}
                    cartItems={cartItems}
                />;
            })}
        </div>
    );
};

ProductDetails.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    removeCart: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,

};
Products.propTypes = {
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
};


export default Products;