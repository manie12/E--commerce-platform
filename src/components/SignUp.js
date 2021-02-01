import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getpostUser } from '../Redux/Actions/postUserSign';
import { useDispatch } from 'react-redux';


export default function SignUp() {
    const dispatch = useDispatch();
    const [postSign, setpostSign] = useState({
        Email: "", Password: "", Errors: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getpostUser(postSign));

        setpostSign({ Email: "", Password: "" })
    }
    return (
        <form onClick={handleSubmit} className='sign__link'>
            <div className='input__field'>

                <TextField

                    fullWidth
                    label="Email"
                    type='email'
                    value={postSign.Email}
                    onChange={(e) => setpostSign({ ...postSign, Email: e.target.value })}

                />
                <p>{postSign.Errors}</p>
            </div>
            <div className='input__field'>

                <TextField

                    fullWidth
                    type='password'
                    label="Password"
                    value={postSign.Password}
                    onChange={(e) => setpostSign({ ...postSign, Password: e.target.value })}

                />
                <p>{postSign.Errors}</p>
            </div>
            <Button type='submit' variant="contained" color="primary">
                Sign Up
            </Button>
        </form>
    )
}
