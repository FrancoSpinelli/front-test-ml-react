/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import Breadcrumb from './Breadcrumb';
import Product from './Product'

function ProductsContainer(props) {

    let { query } = props;

    const [products, setProducts] = useState({});
    const [view, setView] = useState(false);

    if (query === "") {
        let querystring = window.location.search;
        let params = new URLSearchParams(querystring)
        query = params.get("search")
    }

    useEffect(() => {
        setView(false)
        const url = `http://localhost:3001/api/items?q=:${query}`
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setProducts(data)
                setView(true)
            })
            .catch(error => console.error(error))
    }, [query])

    if (view) {
        return (
            <>
                <Breadcrumb categories={products.categories} />
                <section className='container'>
                    {
                        products.items.map((product, i) => {
                            if (i < 4) {
                                return <Product {...product} key={`product-${product.id}`} />
                            }
                        })
                    }
                </section>
    
            </>
        )
    } else {
        return <span className="loader"></span>
    }
}

export default ProductsContainer