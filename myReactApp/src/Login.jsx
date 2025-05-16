import {useState} from "react"
import { Link } from "react-router-dom"
import {auth} from "./Firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    // function handleSumbit(){
    //     console.log(email)
    //     console.log(password)
    // }
    const handleSubmit=(e)=>{
        e.preventDefault()
        auth.onAuthStateChanged(async(user)=>{
            await signInWithEmailAndPassword(auth,email,password)
            window.location.href="/Profile"

            if(user){
                console.log(user)
                console.log("user logged in successfully")
                toast.success("user logged in successfully",{
                    position : "top-right"
                })
            }

        })

    }
    return(
        <>
        <div className="login-page">
            <div className="login-card">
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        name="email" 
                        id="email"
                         placeholder="enter your email" 
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="text" 
                    name="password-identifier" 
                    id="password"  
                    placeholder="enter your password"
                    value ={password} 
                    onChange ={(e) =>setPassword(e.target.value)} />

                    </div>
                    <div className="btn">
                        <button type ="submit">Submit</button>
                    </div>
                    <h6>New User:<Link to ="/sign-up">Register Now</Link> </h6>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login