import axios from 'axios'
import { productsError, productsRequest, productsSucess } from '../Slices/productsSlice'

export const getProducts =(keyword)=> async (dispatch)=>{
    try {
        
        dispatch(productsRequest())
        let link = 'api/v1/products'
        if(keyword){
            link += `?keyword=${keyword}`
        }
        const {data}= await axios.get(link)
        dispatch(productsSucess(data))
    } catch (error) {
        dispatch(productsError(error.response.data.message))
    }
   
}