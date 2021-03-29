import React, { useState } from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialForm = {
    username: "",
    password: ""
}

const initialError = {
    error: "",
}


const LoginPage = porps => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(initialError);

    const history = useHistory;

    // const login = (e) => {
    //     e.preventDefault();
    //     axios .post()
    //     .then((res)=> {
    //         localStorage.setItem("token", res.data.access_token)
    //         window.location.href = '/profile';
    //     })
    //     .catch((err)=> {
    //         setError({ error: " Username or Password is not valid." });
    //     })
    // }


    return (
        <div>
            <h1>Hi</h1>
            <form>
                <input
                    name='username'
                    type='text'
                    placeholder='Username'
                //   value={form.username}
                //   onChange={handleChange}  
                />
                <input
                    name='password'
                    type='password'
                    placeholder='Password'
                // value={form.password}
                // onChange={handleChange}
                />
                {/* <p style={{ color: `red`, fontSize: "14px" }}>{error.error}</p> */}
            </form>
        </div>
    )
}