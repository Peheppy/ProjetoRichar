import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


const Header = () =>{
    return(
    <div  className= 'header'>
        <Link to= "/">
            <button>HOME</button>
        </Link>
        <Link to="/cronometro">
            <button>CRONOMETRO</button>
        </Link>
        <Link to="/calculadora">
            <button>CALCULADORA</button>
        </Link>

    

   </div>
    );
}
//function Header(){
//    
//}
export default Header;

