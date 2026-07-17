import { Fragment, useEffect } from 'react'
import './css/ProductDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../actions/productAction'
import { useParams } from 'react-router-dom'


export default function ProductDetail(){
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSingleProduct(id))
    },[id,dispatch])
    const {product} =useSelector(state=>{
        return state.productState
    })


    return(
        <>
            <>
                {product&&
                <div className='container'>
                    <div className="image-container">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                        alt={`${product.name}`}/>
                    </div>
                    <div className="details-container">

                        <h1 className="product-name">
                            {product.name}
                        </h1>

                        <div className="rating">

                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>

                            <span>4.2 ({product.rating.reviews})</span>

                        </div>

                        <hr/>

                        <h2 className="price">
                            ${product.price}
                        </h2>

                        <p className="stock in-stock">
                            <strong>Stock :</strong> {product.stock>0 ?"InStock":"OutofStock"}
                        </p>

                        <p className="description">

                        {product.description}

                        </p>

                        <div className="button-group">

                            <button className="cart-btn">
                                <i className="fa-solid fa-cart-shopping"></i>
                                Add To Cart
                            </button>

                            <button className="buy-btn">
                                Buy Now
                            </button>

                        </div>

                    </div>
                </div>


        
                }
            </>
        </>

    
    )
}