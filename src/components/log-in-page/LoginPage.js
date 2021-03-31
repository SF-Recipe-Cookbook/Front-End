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


const LoginPage = () => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(initialError);

    const history = useHistory();

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
        console.log(form)
    }

    const login = (e) => {
        e.preventDefault();
        axios
            .post("https://ttwebft72recipecookbook.herokuapp.com/api/auth/", form)
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", JSON.stringify(res.data.token));
                history.push('/profilepage');
                // window.location.href = '/profile';
            })
            .catch((err) => {
                console.log(err.response)
                setError({ error: " Username or Password is not valid." });
            })
    }


    return (
        <StyledLoginWhole>
            <StyledLogin>
                <div className="sign-in-box">
                    <button onClick={goToHomePage} className="left-arrow-button"><i className="arrow left"></i><span> Back to Homepage</span></button>
                    <h1>Sign In</h1>
                    <form onSubmit={login}>
                        <input
                            name='username'
                            type='text'
                            placeholder='Username'
                            value={form.username}
                            onChange={handleChange}
                        />
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={form.password}
                            onChange={handleChange}
                        />
                        <p style={{ color: `red`, fontSize: "14px" }}>{error.error}</p>
                        <button>
                            Sign In
                        </button>
                    </form>
                    <div className="questions">
                        <h5 onClick={goSignUp} className="sign-up">Not a member yet?</h5>
                    </div>
                </div>
            </StyledLogin>
        </StyledLoginWhole>
    )
}

export default LoginPage;

const StyledLoginWhole = styled.div`
  /* background-color: white; */
`




const StyledLogin = styled.div`
    object-fit:cover;
    height: 100vh;
    display: flex;
    font-size: 1.1rem;
    align-items: center;
     /* background-color: white; */


     
     .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    background-color: white;
        }
    .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    background-color: white;
    }   

    h1{
    color: black;
    display:flex;
    justify-content: center;
    margin-bottom: 15%;
    font-size: 1.3rem;
    background-color: white;
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
    box-sizing: border-box; 
    background-color: white; 
    }

    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    
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

    .questions h5{
    background-color: white;
    display:flex;
     justify-content: space-around;
     margin-top: 9px;
     cursor: pointer;
    }
    } 
`