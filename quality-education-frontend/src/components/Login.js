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
        <div className="containerrr" style={{backgroundImage: "url(/background.png)", backgroundSize: "cover"}}>
            { isAuth && <Navigate to="/home" /> }
            { !isAuth && localStorage.clear('auth')}
            <br/> <br/><br/> <br/>
            <h1>WELCOME TO TECSPIK</h1>
            <div className="shop">Take a Course Today!</div>
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
                    <button>Continue</button>

                </form>
                
                <div className="dont-have">
                    <p style={{textDecoration: "none", color: "white"}}>Forgot Password?<Link to="/forgot" style={{textDecoration: "none", color: "blueviolet"}}> Reset here</Link></p>
                    <br/>
                    <p style={{textDecoration: "none", color: "white"}}>Don't have an account?<Link to="/register" style={{textDecoration: "none", color: "blueviolet"}}> Register here</Link></p>
                </div>
                <br />
            </div> 
             <br /> <br /><br /><br /><br />
        </div>   
    );
}
 
export default Login;