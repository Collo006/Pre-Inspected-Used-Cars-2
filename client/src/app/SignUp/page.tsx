import { redirect } from "next/navigation";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
import SignUp from "./sign_up_in";

export default async function AuthPage() {
  
const session = await auth.api.getSession({ headers: await headers()});

if(session){
  redirect('/dashboard')
}

  return <SignUp/>;
}