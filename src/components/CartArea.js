import React from 'react';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function CartArea() {
     const history = useHistory();
     const posts = useSelector(state => state.Products);


    return (
        <>
    
            <div className='arrow__back'>
                <ArrowBackIosOutlined onClick={() => history.goBack()} />
            </div>
            < div className="wrapper__cart">


                {
                    posts.map(post => (

                        <div key={post._id} className="beauty__link__cart">
                            < img src={post.url} alt='item nivea' />

                            < p className='product__name__link' > {post.item_name}</p>
                            <p className='product__costs__cart'>KSH {post.item_cost}</p>
                            <div className='cart__link__del'>


                                <  DeleteForeverOutlined />

                            </div>







                        </div>

                    ))
                }

            </div >

        </>
    )
}
