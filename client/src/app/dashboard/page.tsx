import { redirect } from "next/navigation";

import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
import UserDashBoard from "./client_dashboard";

export default async function DashboardPage() {

const session= await auth.api.getSession({headers: await headers()});

if(!session){
  redirect("/SignUp")
}

  return <UserDashBoard  session={session}/>;
}