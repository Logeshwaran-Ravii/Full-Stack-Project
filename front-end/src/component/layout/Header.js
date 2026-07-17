import { Link } from 'react-router-dom'
import './Header.css'
import Search from './Search'

export default function Header(){
    return(
        <header>

            <nav>
                
                <Link to="/" class="logo">
                    <h2>MyStore</h2>
                </Link>

               
                <Search />

               
                <a href="productsDetail.html" class="login">
                    Login
                </a>

           
                <a href="cart.html" class="cart">

                    <i class="fa-solid fa-cart-shopping"></i>

                    <span class="cart-count">3</span>

                </a>

            </nav>

        </header>
    )

}