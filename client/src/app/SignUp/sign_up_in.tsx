"use client"

import { Ubuntu } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Exo_2 } from "next/font/google"; 
import { Saira } from "next/font/google";
import { useState } from "react";
import { signIn, signInSocial, signUp } from "../../../lib/actions/auth-actions";
import { useRouter } from "next/navigation";
import Image from "next/image";

const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"500",
  display:"swap"

})

const sairaFont= Saira({
  subsets:["latin"],
  weight:"500",
  display:"swap"

})

const sairaFontTwo= Saira({
  subsets:["latin"],
  weight:"400",
  display:"swap"

})

const exoFont= Exo_2({
  subsets:["latin"],
  weight:"400",
  display:"swap"

})

const ubuntuFont= Ubuntu({
  subsets:["latin"],
  weight:"400",
   display:"swap"

})

export default function SignUp(){
  
  const router = useRouter();
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(""); 

  const handleSocialAuth = async (provider: "github" ) => {
    setIsLoading(true);
    setError("");

    try {
      await signInSocial(provider);
      // The redirect happens in the server action
    } catch (err) {

      setError(`Error authenticating with ${provider}: ${err instanceof Error ? err.message : "Unknown error"}`);
      setIsLoading(false);
    }

  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (isSignIn) {
        await signIn(email, password);
        // The redirect happens in the server action
      } else {
        await signUp(email, password, name);
        // The redirect happens in the server action
      }
      router.push("/dashboard")
    } catch (err) {
      setError(`Authentication error: ${err instanceof Error ? err.message : "Unknown error"}`);
      setIsLoading(false);
    }
  };

    return(
        <div className={` bg-cover bg-center bg-no-repeat `} >
                <Image src="/images/PORSCHE-1.jpg" alt="Background" fill priority className="object-cover -z-10" />
          
         <div className=" sm:w-[700px] sm:h-full sm:mx-auto sm:pt-2 mx-auto pt-2">
           <h1 className={`font-semi-bold text-xl sm:text-5xl sm:pb-2 pb-1 text-white text-center  ${ubuntuFont.className}`}>
            SignUp to get the latest <br></br>update of available Cars
           </h1>
           <p className={`sm:text-xl text-md text-white mb-2 text-center ${exoFont.className}`}>
            Create a Free PINUC Account to get the best car deals in Town.<br></br></p>
   {/**Error Display */}
   {error && (
    <div className="bg-red-50 border-red-200 rounded-lg p-4 mb-2 ">
        <div className="flex">
          <div className="shrink-0">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        </div>
    </div>
   )}

  {/** Email/Password Form */}
               
           <form onSubmit={handleEmailAuth} className="border border-skyBlue/20 bg-white/10 backdrop-blur-md shadow-lg bg-clip-text sm:pl-7 pb-10 rounded-xl text-white sm:h-auto sm:w-auto w-[300px] sm:ml-0 ml-10">
              {!isSignIn && (
            <div className=" pt-1 ">
                <label htmlFor="name" className={`pl-2 sm:text-lg text-sm ${sairaFont.className}`}> NAME</label>
                <input id="name" name="name" type="text" className={`sm:w-[650px] sm:h-[50px] w-[285px] h-[30px] border border-gray-600 sm:ml-0 ml-1 pl-2 sm:text-lg text-sm rounded-xl ${sairaFontTwo.className}`} autoComplete="name" required={!isSignIn} value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your Full name" />
            </div>
             )}
            <div className=" pt-1 ">
                <label htmlFor="email" className={`pl-2 sm:text-lg text-sm ${sairaFont.className}`}> EMAIL</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className={`sm:w-[650px] sm:h-[50px] w-[285px] h-[30px] border border-gray-600 pl-2 sm:text-lg sm:ml-0 ml-1 text-sm rounded-xl ${sairaFontTwo.className}`} />
            </div>

            <div className=" pt-1 ">
                <label htmlFor="password" className={`pl-2 sm:text-lg text-sm ${sairaFont.className}`}> PASSWORD</label>
                <input id="password" name="password" type="password" autoComplete={isSignIn ? "current-password" : "new-password" } value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your Password"className={`sm:w-[650px] sm:h-[50px] w-[285px] h-[30px] border border-gray-600 pl-2 sm:text-lg sm:ml-o ml-1 text-sm rounded-xl ${sairaFontTwo.className}`} />
            </div>

            <button type="submit" disabled={isLoading} className={`cursor-pointer mt-4 sm:h-auto sm:w-[650px] w-[285px] h-[33px] flex justify-center py-3 px-4 border border-gray-600 rounded-lg shadow-sm sm:text-lg sm:ml-0 ml-1 font-medium text-sm text-white  hover:bg-mediumGray hover:text-skyBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors ${sairaFont.className}`}>
               {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isSignIn ? "Signing in..." : "Creating account..."}
                </div>
              ) : isSignIn ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
           </form>
           <p className={`pt-3 text-center text-white sm:text-lg text-sm ${exoFont.className}`}>Or Continue With </p>

 {/** Social Authentication */}
           <div className="flex justify-center" >
      
            <button className={` mt-2 sm:ml-24 text-skyBlue sm:w-[450px] w-[225px] h-[50px] border border-mediumGray bg-mediumGray text-center sm:text-lg text-sm rounded-xl cursor-pointer ${sairaFont.className}`} onClick={()=>handleSocialAuth("github")} disabled={isLoading}> Github</button>
            </div>

            {/*Toggle between Sign In and Sign Up*/}
            <div className="text-center">
              <button type="button" onClick={()=>{
                setIsSignIn(!isSignIn);
                setError(""); //clear any previous errors
                setName(""); //clear name when switching
              }} className={` text-white hover:text-skyBlue sm:text-lg text-sm font-medium transition-colors ${josefinFont.className}`}>
                 {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
              </button>
            </div>


         </div>
        </div>
    )
}