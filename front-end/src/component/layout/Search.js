import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Search(){
    const [keyword,setKeyword] = useState("")
    const navigate = useNavigate()
    const searchHandler=(e)=>{
        e.preventDefault()
        navigate(`/${keyword}`)

    }

    return(
        <>
        <div class="search-box">
            <form onSubmit={(e)=>{
                searchHandler(e)
            }}>

                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={(e)=>{
                            setKeyword(e.target.value)      
                        }}
                        value={keyword}
                    />

                    <button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>

            </form>
         </div>
        </>
    )
}