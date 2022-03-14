import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';
import userData from '../../user.json'
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const useStyles = makeStyles({
        input: {
            marginTop: '20px !important'
        }
    });
    const classes = useStyles()

    const handleLogin = () => {
        if (username === userData.data.username && password === userData.data.password) {
            localStorage.setItem('token', userData.data.token)
            navigate('/')
        } else {
            alert('username yoki parol xato!')
        }
    }

    return (
        <div className='login_wrapper'>
            <main className='login_main'>
                <h1>Profilga kirish</h1>

                <TextField
                    label="Login"
                    name="username1"
                    variant="outlined"
                    className={classes.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Parol"
                    name="password1"
                    variant="outlined"
                    type="password"
                    className={classes.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant='contained'
                    className={classes.input}
                    onClick={handleLogin}
                >
                    Kirish
                </Button>
            </main>
        </div>
    )
}

export default Login