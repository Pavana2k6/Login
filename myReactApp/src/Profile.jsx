import {auth,db} from "./Firebase"
import {getDoc,doc} from "firebase/firestore"
import {useState,useEffect} from "react"
function Profile(){
    const[userDetails,setUserDetails] =useState(null)
    const fetchUserData = async()=>{
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef = doc(db,"Users",user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
            }else{
                console.log("user not logged in")
            }
        })
    }
    useEffect(()=>{
        fetchUserData()
    },[]) 

    async function Logout(){
        try{
            await auth.signOut()
            window.location.href = "/Login"

        }catch(err){
            console.log(err.message)
            
        }
    }
    return(
        <div>
        {userDetails ? (<>
        <h1>welcome to the site: {userDetails.firstname}</h1>
        <div>
            <h3>email : {userDetails.email}</h3>
            <h3>firstName : {userDetails.firstname}</h3>
            <h3>lastName : {userDetails.lastname}</h3>
        </div>
        <button type="submit" onClick={Logout}>logout</button>
        </>):
        (<p>Loading....</p>)
}

        </div>
    )
}
export default Profile