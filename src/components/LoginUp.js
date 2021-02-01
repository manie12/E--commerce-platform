import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
                   

export default function LoginUp() {
    const [postLogin, setpostLogin] = useState({
        Email: "", Password: ""

    });
    return (
        <form className='loginup'>
            <div className='input__field'>

                <TextField

                    label="Email"
                    gutterBottom
                    type='email'
                    value={postLogin.Email}
                    onChange={(e) => setpostLogin({ ...postLogin, Email: e.target.value })}

                />
            </div>
            <div className='input__field'>

                <TextField

                    label="Password"
                    type='password'
                    value={postLogin.Password}
                    onChange={(e) => setpostLogin({ ...postLogin, Password: e.target.value })}

                />

            </div>
            <Button variant="contained" color="primary">
                Login
            </Button>
        </form>
    )
}
