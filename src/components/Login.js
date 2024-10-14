import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACK_URL } from "../utils/constants";




const Login = () => {


    
    const [isSignInForm, setIsSignInForm]=useState(true);


    const [errorMsg,setErrorMsg]=useState();

    
   

   //const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    

    const handleButtonClick=()=>{ 
        const message= checkValidateData(email.current.value, password.current.value);
        setErrorMsg(message);
        if(message) return;

        if(!isSignInForm){
          //sign up
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode+"-"+ errorMessage);

            });

        }
        else{
          //sign in

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                   
                  const user = userCredential.user;
                  console.log(user);
                 
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMsg(errorCode+"-"+ errorMessage);
                });
        }
    }

    const toggleSignInForm=()=>{
       setIsSignInForm(!isSignInForm);
    };


  return (
    <div>
        <Header/>
        <div className="absolute">
        <img src={BACK_URL}
        alt="logo"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4 ">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-sm" required/>)}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-sm" required/>
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-sm" required/>
            <p className="text-red-500 font-bold">{errorMsg}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-sm" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login