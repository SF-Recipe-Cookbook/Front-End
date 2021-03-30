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
                <div className="sign-in-box">
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
  background-image: url{};
`

const StyledLogin = styled.div`
    object-fit:cover;
    height: 100vh;
    display: flex;
    font-size: 1.1rem;
    align-items: center;

    

    h1{
    color: black;
    display:flex;
    justify-content: center;
    margin-bottom: 15%;
    font-size: 1.4rem;
}


.sign-in-box{
    -webkit-box-shadow: 22px -14px 15px 5px rgba(0,0,0,0.89); 
box-shadow: 22px -14px 15px 5px rgba(0,0,0,0.89);

     width: 40%;
     border: 2px solid black;
     background-color:white;
     margin: auto;
     border-radius: 5px;
     padding: 100px 50px;
}

input{
    margin-top: 9px;
    width: 85%;
    padding: 13px 22px;
    margin: 10px 5px;
    /* box-sizing: border-box;   */
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}


form button{
    width: 40%;
    background-color: black;
    color:white;

    font-size: 1.1rem;
    border-radius: 4px;
    margin-top: 5px;
    padding: 10px;
    margin: 5px 5px;
    cursor: pointer;
}
`