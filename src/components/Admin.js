import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FileBase from 'react-file-base64';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { postFetch } from '../Redux/Actions/postFetch';



export default function Admin() {
    const dispatch = useDispatch();
    const [postData, setpostData] = useState({
        url: "", name_item: "", category: "", name_cost: "", name_description: ""

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postFetch(postData))
        setpostData({
            url: "", name_item: "", category: "", name_cost: "", name_description: ""

        })
    }
    return (
        <form className='admin' >
            <div className='fieldtext'>
                <TextField
                    id=""
                    fullWidth
                    gutterBottom
                    label="Name"
                    value={postData.name_item}
                    onChange={(e) => setpostData({ ...postData, name_item: e.target.value })}

                />
            </div>
            <div className='fieldtext'>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    gutterBottom
                    fullWidth
                    rowsMax={5}

                    value={postData.name_description}
                    onChange={(e) => setpostData({ ...postData, name_description: e.target.value })}
                    variant="outlined"
                />
            </div>
            <div className='fieldtext'>

                <TextField
                    id=""
                    fullWidth
                    gutterBottom
                    label="Cost"
                    value={postData.name_cost}
                    onChange={(e) => setpostData({ ...postData, name_cost: e.target.value })}

                />
            </div>


            <div className='fieldtext'>

                <TextField
                    id=""
                    fullWidth
                    gutterBottom
                    label="Category"
                    value={postData.category}
                    onChange={(e) => setpostData({ ...postData, category: e.target.value })}

                />
            </div>

            <div className='fieldtext'>

                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setpostData({ ...postData, url: base64 })}


                />
            </div>
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit
            </Button>
        </form>
    )
}
