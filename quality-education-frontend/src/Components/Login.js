import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [ error, setError ] = useState('');
    const navigate  = useNavigate();
    const isAuth = localStorage.getItem('auth')

    const onSubmit = (data) => {
        if (data.email === "admin@example.com" && data.password === "Face1234@") {
            localStorage.setItem('auth', true);
            navigate("/home")
        }else {
            setError("Invalid login details")
        }
    }

    return (
        <div><br/><br/> <br/><br/> 
        <div className="containerrr">
            { isAuth && <Navigate to="/home" /> }
            { !isAuth && localStorage.clear('auth')}
            <h1>Sign in</h1>
            {/* <div className="shop">Take a Course Today!</div> */}
            <p className="error-msg">{ error }</p>
            <div className="form" >
                <form onSubmit={ handleSubmit(onSubmit) }>
                <label>Email address</label>
                    <input 
                        type="email"
                        { ...register("email", { required: true })}
                    />
                    { errors.email && <p className="error-msg">email is required</p>}
                    <label>Password</label>
                    <input 
                        type="password"
                        { ...register("password", { required: true ,minLength:6})}
                    />
                    { errors.password && <p className="error-msg">password is required</p>}


                    <p><Link to="/forgot" style={{textDecoration: "none", color: "blueviolet"}}>Forgot Password?</Link></p>
                    <button>Sign in</button>

                </form>
                
                <div className="dont-have">
                   
                   
                    <p>Don't have an account?<Link to="/register" style={{textDecoration: "none", color: "blueviolet"}}> Sign up</Link></p>
                </div>
                <br />
            </div> 
        </div> 
        <br /> <br /><br /><br /><br />
        </div>  
    );
}
 
export default Login;