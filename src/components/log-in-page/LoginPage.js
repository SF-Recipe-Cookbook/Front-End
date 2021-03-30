import React, { useState } from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import cookbookImage from '../../images/cookbookImage'

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

    const goToHomePage = () => {
        history.push('/')
    };

    const goSignUp = () => {
        history.push('/signup')
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post()
            .then((res) => {
                localStorage.setItem("token", res.data.access_token)
                window.location.href = '/profile';
            })
            .catch((err) => {
                setError({ error: " Username or Password is not valid." });
            })
    }


    return (
        <StyledLoginWhole>
            <StyledLogin>
                <div>
                    <h1>Sign In</h1>
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
                        <button>
                            Sign In
                        </button>
                    </form>
                    <h5 onClick={goSignUp} className="-sign-up">Not a member yet?</h5>
                </div>
            </StyledLogin>
        </StyledLoginWhole>
    )
}

export default LoginPage;

const StyledLoginWhole = styled.div`
  
`

const StyledLogin = styled.div`
    object-fit:cover;
    height: 100vh;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
`