import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingBasket } from '@material-ui/icons';
import { AccountCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'


export default function Header({ setShow, }) {
    const location = useLocation();
    const count = useSelector(state => state.count);
    console.log(count)

    return (

        <div className="header">


            <IconButton onClick={() => setShow(true)}>
                <MenuIcon />
            </IconButton>
            <p className='village'>Village Market</p>

            <div className='avatar__link'>
                <AccountCircle />

            </div>
            {location.pathname === '/cart' ? null : (
                < Link to='/cart' className='basket'>
                    <p className='cart__qty'>{count}</p>
                    <ShoppingBasket />

                </Link>)
            }
        </div >
    )
}
