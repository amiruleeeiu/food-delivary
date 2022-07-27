import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Contact from '../pages/Contact';
import FoodDetails from '../pages/FoodDetails';
import Login from '../pages/Login';
import Registar from '../pages/Registar';
import AllFoods from '../pages/AllFoods';
import CheckOut from '../pages/CheckOut';


const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/food/:id' element={<FoodDetails/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registar' element={<Registar/>}/>
                <Route path='/food' element={<AllFoods/>}/>
                <Route path='/checkout' element={<CheckOut/>}/>
            </Routes>
        </div>
    );
};

export default Routers;