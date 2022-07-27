import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector ,useDispatch} from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import { cartUIActions } from '../../app/shopping-cart/cart-ui-slice';
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
    const user=useSelector(state=>state.auth.user);
    const dispatch=useDispatch()
    const email=localStorage.getItem('email');
    const name=localStorage.getItem('name');
    const photoURL=localStorage.getItem('photoURL');
    console.log(email,photoURL);

    //auth
    const app = initializeApp(firebaseConfig);
    const auth=getAuth(app)

    const toggleMenu=()=>menuRef.current.classList.toggle('show_menu');

    const changeStyle=()=>{
        if(window.scrollY >=90){
            setHeaderStyle(true);
        }else{
            setHeaderStyle(false);
        }
    }

    const handleLogout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
       }

    window.addEventListener('scroll',changeStyle);


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
                            <NavLink to='/login'>
                            <i class="ri-user-line"></i>
                            </NavLink>
                        </span>
                        {
                            email ? 
                            <div className='user gap-1 d-flex '>
                                {/* <img src={photoURL} alt="" className='mr-5'/> */}
                                <span>{name}</span>
                                {/* <span onClick={handleLogout}>Logout</span> */}
                            </div>
                            : 
                            <div>

                            </div>
                        }
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