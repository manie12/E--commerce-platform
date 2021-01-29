import React from 'react';
import { ShoppingBasket } from '@material-ui/icons';
import { useSelector } from 'react-redux';


export default function Sports() {
    const posts = useSelector(state => state.Products)
    console.log(posts)
    return (
        < div className="wrapper">
            {posts.map((post) => (

                <div key={post._id} className="beauty__link">
                    < img src={post.url} alt='item nivea' />

                    < p className='product__name' > {post.item_name}</p>
                    <p className='product__costs'>KSH {post.item_cost}</p>
                    <div className='cart__link'>


                        <  ShoppingBasket />

                    </div>







                </div>
            ))}

        </div >

    )
}
