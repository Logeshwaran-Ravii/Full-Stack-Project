import axios from 'axios'
import { productError, productRequest, productSucess } from '../Slices/productSlice'

export const getSingleProduct =(id)=> async (dispatch)=>{
    try {
        dispatch(productRequest())
        const {data}= await axios.get(`/api/v1/product/${id}`)
        dispatch(productSucess(data))
    } catch (error) {
        dispatch(productError(error.response.data.message))
    }
   
}