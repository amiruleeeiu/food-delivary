import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector ,useDispatch} from 'react-redux';
import { Link, useNavigate, NavLink } from "react-router-dom";
import { cartUIActions } from '../../app/shopping-cart/cart-ui-slice';
import { useUserAuth } from '../../Context/UserAuthContext';
import firebaseConfig from '../../firebaseConfig';
import './Header.css'


const nav_link=[
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Foods',
        path:'/food'
    },
    {
        display:'Cart',
        path:'/cart'
    },
    {
        display:'Contact',
        path:'/contact'
    },
]

const Header = () => {

    const[headerStyle,setHeaderStyle]=useState(false);
    const menuRef=useRef(null);
    const cartQuantity=useSelector(state=>state.cart.totalQuantity);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {user,logOut}=useUserAuth();
    //auth

    const toggleMenu=()=>menuRef.current.classList.toggle('show_menu');

    const changeStyle=()=>{
        if(window.scrollY >=90){
            setHeaderStyle(true);
        }else{
            setHeaderStyle(false);
        }
    }

   
    window.addEventListener('scroll',changeStyle);

    const handleLogOut=async()=>{
        try{
            await logOut();
            navigate('/');
        }catch(err){
            console.log(err.message);
        }
    }


    return (
       <header className={ headerStyle ? 'header header_shrink' : 'header'}>
            <Container>
                <div className="nav_wraper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Link to='/'><h4>Foods Delivary</h4></Link>
                    </div>
                
                    <div className="navigation" ref={menuRef}>
                        <div className="manu d-flex align-items-center gap-5">
                            {
                                nav_link.map((item,index)=>(
                                    <NavLink to={item.path} onClick={toggleMenu} className={({ isActive }) =>
                                    isActive ? 'activeStyle' : ''
                                } key={index}>{item.display}</NavLink>
                                ))
                            }
                        
                        </div>
                    </div>
                    <div className="nav_right">
                        <div className=" d-flex align-items-center gap-3">
                        <span className='cart_icon' onClick={()=>dispatch(cartUIActions.toggle())}>
                            <i class="ri-shopping-basket-line"></i>
                            <span className='cart_badge'>{cartQuantity}</span>
                        </span>
                        <span className='user_icon'>
                            {/* <NavLink >
                            <i class="ri-user-line"></i>
                            </NavLink> */}
                            {
                                user ? <button className="log_out_btn" onClick={handleLogOut}>Log out</button>
                                : <Link to='/login'><button className="log_out_btn">Log in</button></Link>
                            }
                        </span>
                        
                        <span className='mobile_menu' onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>
                        </div>
                    </div>
                    
                </div>
                
            </Container>
            
       </header>
    );
}

export default Header;