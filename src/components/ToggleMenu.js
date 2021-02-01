import React from 'react';
import { Link } from 'react-router-dom';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';

export default function ToggleMenu({ setShow }) {



    return (
        <div onClick={() => setShow(false)} className="toggle__menu">
            <ClearSharpIcon className='x__button' onClick={() => setShow(false)} />
            <Link to='/health' className='item__link'>Health</Link>
            <Link to='/beauty' className='item__link'>Beauty</Link>
            <Link to='/home' className='item__link'>Home & Office</Link>
            <Link to='/phone' className='item__link'>Phone & Tablets</Link>
            <Link to='/garden' className='item__link'>Garden & Outdoors</Link>
            <Link to='/sports' className='item__link'>Sporting</Link>
            <Link to='/computing' className='item__link'>Computing</Link>
            <Link to="/admin" className="item__link"> Admin</Link>
            <Link to="/signup" className="item__link"> SIGN UP</Link>
            <Link to="/loginup" className="item__link"> LOGIN UP</Link>



        </div >
    )
}
