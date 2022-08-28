import React from 'react'
import { Link } from 'react-router-dom';

function Product(props) {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const { id, price, title, picture, state_name, free_shipping } = props;
    return (
        <Link className='product' to={`/item/${id}`}>
            <img src={picture} alt="" />
            <div className="description">
                <p className="price">$ {toThousand(price.amount)} {free_shipping ? <i className="fa-solid fa-truck-fast"></i>: ""}</p>
                <p className="title">{title}</p>
            </div>
            <p className="state">{state_name}</p>
        </Link>

    )
}

export default Product