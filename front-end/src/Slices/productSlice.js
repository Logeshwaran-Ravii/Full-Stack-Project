    import { createSlice } from "@reduxjs/toolkit";

    const productSlice = createSlice({
        name:'products',
        initialState:{
            loading: false
        },
        reducers:{
            productRequest(state,action){
                return{
                    loading:true
                }
            },
            productSucess(state,action){
                return{
                    loading:false,
                    product:action.payload.product || {}
                }
            },
            productError(state,action){
                return{
                    loading:false,
                    error:action.payload
                }
            }
        }
    })

    const {actions,reducer}= productSlice
    export const {productRequest,productSucess,productError} = actions;
    export default reducer