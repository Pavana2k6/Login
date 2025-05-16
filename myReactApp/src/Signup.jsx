import { Link } from "react-router-dom"
import {useState} from "react"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {setDoc,doc} from "firebase/firestore"
import {auth,db} from "./Firebase"
import {toast} from "react-toastify"
function Signup(){
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        await createUserWithEmailAndPassword(auth,email,password)
        const user = auth.currentUser
        if(user){
            await setDoc(doc(db,"Users",user.uid),{
                email:email,
                firstname:firstName,
                lastname:lastName
            })
        }
        console.log(user)
        toast.success("user registered succefully",{
            position:'bottom-center'
        })
        console.log("user created");
    }catch(error){
        console.log(error.message)
        toast.error(error.message,{
            position:'bottom-center'
        })
    }

}
    return(
        <>
        <div className="signup-page">
        <form action="" onSubmit={handleSubmit}>
            <h2>SIGN UP</h2>
            <div className="firstname">
            <label htmlFor="firstname">First Name</label>
            <input onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstname" id="firstname" placeholder="Enter your first name" value={firstName}/>
            </div>
            <div className="lastname">
            <label htmlFor="Lastname">Last Name</label>
            <input onChange={(e)=>setLastName(e.target.value)} type="text" name="secondname" id="secondname" placeholder="Enter your last name" value={lastName}/>
            </div>
            <div className="email">
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email-identity" id="email" placeholder="Enter Email" value={email} />
            </div>
          <div className="password">
          <label htmlFor="password">Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password-identity" id="password" placeholder="Enter password" value={password} />
          </div>
            <button>Sign Up</button>
            <div className="already">
                <p>Already signed up <Link to="/Login">Login</Link></p>
            </div>
        </form>
        </div>
        </>
    )
}
export default Signup