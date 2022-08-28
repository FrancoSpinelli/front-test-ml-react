import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [view, setView] = useState(false);

    useEffect(() => {
        const url = `http://localhost:3001/api/items/${id}`
        fetch(url)
            .then(result => result.json())
            .then(data => {
                setProduct(data)
                setView(true)
            })
            .catch(error => console.error(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view])

    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    if (view) {
        return (
            <>
                <Breadcrumb categories={product.categories} />
                <section className='product-detail-section'>
                    {
                        product.item &&
                        <>
                            <div className='product-detail'>
                                <img src={product.item.picture} alt="product" />
                                <h3>Descripción del producto</h3>
                                {product.item.description}
                            </div>
                            <div className='price'>
                                <p className='condition'> {`${product.item.condition} - ${product.item.sold_quantity} vendidos`}</p>
                                <p className='title'>                        {product.item.title}</p>
                                <p className='price'>{`$ ${toThousand(product.item.price.amount)}`}</p>
                                <button className='comprar'>Comprar</button>
                            </div>

                        </>
                    }
                </section>
            </>
        )
    }else {
        return <span className="loader"></span>
    }

}

export default ProductDetail