import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";

const Forgot = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [ error ] = useState('');
    const navigate  = useNavigate();
    const isAuth = localStorage.getItem('auth')

    // const onSubmit = (data) => { localStorage.setItem('auth', true);
        const onSubmit=    navigate("/login")
        // }



    return (  
        <div><br/><br/> <br/><br/><br/><br/> <br/><br/>
        <div className="containerr">
            <h1>RESET PASSOWRD!</h1>
            <br />
            <p className="error-msg">{ error }</p>
            <div className="formm">
                <form onSubmit={ handleSubmit(onSubmit) }>
                <label>Enter your email address</label>
                    <input 
                        type="email"
                        { ...register("email", { required: true })}
                    />
                    { errors.email && <p className="error-msg">email is required</p>}
                    
                    <button>Submit</button>

                </form>
            </div> 
        </div>  
        <br /> <br /><br /><br /><br /><br/><br/> <br/><br/>
        </div>   
    );
}
 
export default Forgot;