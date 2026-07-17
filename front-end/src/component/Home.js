import { Fragment } from 'react/jsx-runtime'
import './css/Home.css'
import MetaData from './layout/MetaData'
import { useEffect } from 'react'
import {getProducts} from '../actions/productsAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'



export default function Home(){

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const {products} = useSelector(state=>state.productsState)

    
    return(
        <>
            {
                products &&
                <div className="over-all-container">
                    {
                        products.map(product=>{
                            return(
                        <div className="product-container">

                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt={`${product.name}`}/>
                            </div>

                        <div className="product-details">x
                                <h3 className="product-name">
                                {product.name}
                                </h3>
                            
                                

                            <div className="price">
                                ${product.price}
                            </div>

                            <div className="rating">

                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>

                                <span>{product.rating.reviews}</span>

                            </div>

                           <Link to={`productDetail/${product._id}`}>
                                <button>
                                    View Details
                                </button>
                           
                           </Link>
                            
                            

                        </div>

                                </div>
                            )
                        })
                    }
                    
                </div>
             
            }
        </>
    )
}


                
                // <div classNameName='product-container'>
                //             <img src='../images/headphone-image.jpg'  classNameName='headphone-image'/>
                //             <p>Boult headphone 2r</p>
                //             <div classNameName='rating-container'>
                //                 <img src='../images/star-rating-5.png' classNameName='rating-icon' />
                //                 <span>(4)</span>
                //             </div>
                //             <button>Add to Cart</button>

                // </div>
                // <div classNameName='product-container'>
                //             <img src='../images/headphone-image.jpg'  classNameName='headphone-image'/>
                //             <p>Boult headphone 2r</p>
                //             <div classNameName='rating-container'>
                //                 <img src='../images/star-rating-5.png' classNameName='rating-icon' />
                //                 <span>(4)</span>
                //             </div>
                //             <button>Add to Cart</button>

                // </div>                     {/* <!-- Product 2 --> */}
                    // <div className="product-container">

                    //     <div className="product-image">
                    //         <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" alt=""/>
                    //     </div>

                    //     <div className="product-details">

                    //         <h3 className="product-name">
                    //             Premium Smart Watch
                    //         </h3>

                    //         <div className="price">
                    //             ₹4,999
                    //         </div>

                    //         <div className="rating">

                    //             <div className="stars">
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star-half-stroke"></i>
                    //                 <i className="fa-regular fa-star"></i>
                    //             </div>

                    //             <span>(185 Reviews)</span>

                    //         </div>

                    //         <button>
                    //             View Details
                    //         </button>

                    //     </div>

                    // </div>


                    //     {/* <!-- Product 3 --> */}
                    // <div className="product-container">

                    //     <div className="product-image">
                    //         <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" alt=""/>
                    //     </div>

                    //     <div className="product-details">

                    //         <h3 className="product-name">
                    //             Apple Smartphone
                    //         </h3>

                    //         <div className="price">
                    //             ₹69,999
                    //         </div>

                    //         <div className="rating">

                    //             <div className="stars">
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //             </div>

                    //             <span>(520 Reviews)</span>

                    //         </div>

                    //         <button>
                    //             View Details
                    //         </button>

                    //     </div>

                    // </div>


                    //      {/* <!-- Product 4 --> */}
                    // <div className="product-container">

                    //     <div className="product-image">
                    //         <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" alt=""/>
                    //     </div>

                    //     <div className="product-details">

                    //         <h3 className="product-name">
                    //             Wireless Bluetooth Headphones
                    //         </h3>

                    //         <div className="price">
                    //             ₹1,799
                    //         </div>

                    //         <div className="rating">

                    //             <div className="stars">
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star-half-stroke"></i>
                    //                 <i className="fa-regular fa-star"></i>
                    //             </div>

                    //             <span>(96 Reviews)</span>

                    //         </div>

                    //         <button>
                    //             View Details
                    //         </button>

                    //     </div>

                    // </div>
                    
                    // <div className="product-container">

                    //     <div className="product-image">
                    //         <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" alt=""/>
                    //     </div>

                    //     <div className="product-details">

                    //         <h3 className="product-name">
                    //             Wireless Bluetooth Headphones
                    //         </h3>

                    //         <div className="price">
                    //             ₹1,799
                    //         </div>

                    //         <div className="rating">

                    //             <div className="stars">
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star"></i>
                    //                 <i className="fa-solid fa-star-half-stroke"></i>
                    //                 <i className="fa-regular fa-star"></i>
                    //             </div>

                    //             <span>(96 Reviews)</span>

                    //         </div>

                    //         <button>
                    //             View Details
                    //         </button>

                    //     </div>

                    // </div>