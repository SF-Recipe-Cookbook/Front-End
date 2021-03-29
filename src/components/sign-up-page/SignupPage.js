import * as yup from 'yup'
import styled from 'styled-components'
import { axiosWithAuth } from '../../axiosWithAuth'

const formSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().required("Email is required")
})

const CreateUser = props => {
    const userId = parseInt(localStorage.getItem("user"))

    const initialData = {
        user_id: userId,
        username: "",
        password: "",
        email: ""
    }

    const [formState, setFormState] = useState(initialData);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errorState, setErrorState] = useState({
        username: "",
        password: "",
        email: ""
    })

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        })
    }, [formState])


    const formSubmit = e => {
        e.preventDefault();
        console.log("Submit clicked")
        axiosWithAuth()
            .post("/auth/register", formState)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
        setFormState(initialData)
    }

    const validate = e => {
        let t = e.target
        yup
            .reach(formSchema, t.name)
            .validate(t.value)
            .then(valid => {
                setErrorState({ ...errorState, [t.name]: "" })
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [t.name]: err.errors[0]
                })
            })
    }

    const inputChange = e => {
        e.persist()
        validate(e)

        let t = e.target
        setFormState({ ...formState, [t.name]: t.value })
    }

    // {errorState.username ? <span className="error">{errorState.username}</span> : null}
    // name='' type='' value={formState.} onChange={inputChange}
    return (
        <StyledDiv className='form-container'>
            <h1 className='signup-title'>Register a new user</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor='username'>
                    <h2>Username</h2>
                    <StyledInput name='username' type='text' value={formState.username} onChange={inputChange} />
                </label>
                {errorState.username ? <span className='error'>{errorState.username}</span> : null}
                <label htmlFor='password'>
                    <h2>Password</h2>
                    <StyledInput name='password' type='password' value={formState.password} onChange={inputChange} />
                </label>
                {errorState.password ? <span className="error">{errorState.password}</span> : null}
                <label htmlFor='email'>
                    <h2>Email</h2>
                    <StyledInput name='email' type='email' value={formState.email} onChange={inputChange} />
                </label>
                {errorState.email ? <span className="error">{errorState.email}</span> : null}
                <button disabled={buttonDisabled}>Submit</button>
            </form>
        </StyledDiv>
    )
}

export default CreateUser

const StyledDiv = styled.div`
.error {
    color: red;
}
button {
    border: 2px solid white;
    border-radius: 50px;
    width: 20vw;
    margin-top: 25px;
    padding: 1%;
}
button:hover {
  color: white;
  background-image: none;
  background-color: #4267B2;
  border: 2px solid white;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}
button:disabled {
  color: #666;
  background-image: none;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  text-shadow: none;
}
`
const StyledInput = styled.input`
border: 2px solid white;
border-radius: 50px;
width: 30vw;
margin: 1.2% auto;
padding: 1.4%;
`