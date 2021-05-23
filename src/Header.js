import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
//import logo from './image/alogo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}]=useStateValue();
    //console.log(basket)
    return (
        <nav className="header">
{/* ------------logo on the left ->img-------*/}
            <Link to='/'>
  <img src="image/alogo.png"className="header_logo"/>
  </Link>
{/*-------------- search box -------------*/}
  <div className="header_search">
  <input type="text" className=" header_searchinput"/>
  <SearchIcon className="header_searchicon" />
  </div>
    <div className="header_nav">
<Link to="/login" className="header_links">
<div className="header_option">
    <span className="o1">Hello Priyanka</span>
    <span className="o2">Signin</span>
</div>  
</Link>
<Link to="/login" className="header_links">
<div className="header_option">
    <span className="o1">Return</span>
    <span className="o2">& Orders</span>
</div>  
</Link>
<Link to="/login" className="header_links">
<div className="header_option">
    <span className="o1">Your </span>
    <span className="o2">Prime</span>
</div>  
{/* ---------basket icon with number---------------*/}
</Link>
<Link to="/checkout" className="header_links">
<div className="header_basket">
<ShoppingBasketIcon/>
<span className="02 basket_count">{basket?.length}</span>
</div>
</Link>
    </div>
            
        </nav>
    )
}

export default Header
