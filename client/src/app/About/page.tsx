import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Exo_2, Saira } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",

})

const sairaFont= Saira({
  subsets:["latin"],
  weight:"400",
   display:"swap"

})


export default function About(){
    return(
        <div >
            <Header></Header>
            <h1 className={`${exoFont.className} text-5xl text-darkSky font-bold text-center`}>ABOUT PINUC DEALERSHIP</h1>
            <div className={`bg-white ml-10 w-[1600px] rounded-xl `}>
                <div className={`relative mx-auto w-full min-w-[400px] h-[700px]`}>
                <Image src="/images/tow-truck.jpg" alt="Background" className={`rounded-t-xl object-cover `} fill />
                </div>
                <p  className={`text-lg ${sairaFont.className} pt-10 pl-2 pr-2 pb-10 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.&quot;There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.&quot;</p>
            </div> 
            <div className={`bg-lightSky ml-10 w-[1600px] rounded-xl mt-10 `}>
               <div className={`relative mx-auto w-full min-w-[400px] h-[700px]`}>
                <Image src="/images/peopel.jpg" alt="Background" className={`rounded-xl object-cover `} fill />
                </div> 
                </div> 
                <div className={` ml-10 w-[1600px] h-[600px] rounded-xl mt-10 grid grid-cols-[1fr_2fr] gap-2`}>
                      <div className={` w-full `}>
                        <div className={`relative mx-auto w-full min-w-[400px] h-[600px]`}>
                    <Image src="/images/people.jpg" alt="Background" className={`rounded-xl object-cover `} fill />
                        </div>

                      </div>

                      <div className={`bg-white rounded-xl`}>
                       <h1 className={`${exoFont.className} text-5xl text-darkSky font-bold text-center pt-5`}>WHY CHOOSE PINUC</h1>
                       <p className={`text-lg ${sairaFont.className} pt-5 pl-2 pr-2 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>
                        <p className={`text-lg ${sairaFont.className} pt-5 pl-2 pr-2 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>

                        <p className={`text-lg ${sairaFont.className} pt-5 pl-2 pr-2 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>

                      </div>
                </div>
            <h2 className={`${exoFont.className} text-4xl text-darkSky font-bold text-center pt-5`}>RECENT EXPERT REVIEWS</h2>
            <div className={`bg-white ml-10 w-[1600px] h-[600px] rounded-xl mt-10 grid grid-cols-3 gap-4`}>
                <div className={`w-full `}>
                    <div className={`relative w-full h-[400px]`}>
                        <Image src="/images/mechanic.jpg" alt="mechanic" className={`object-cover rounded-t-lg`} fill/>
                    </div>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-sm text-navyBlue `}>
                            <p className={`space-y-1 text-lg text-navyBlue ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                        </div>
                </div>
                <div className={`w-full `}>
                    <div className={`relative w-full h-[400px]`}>
                        <Image src="/images/oldies.jpg" alt="mechanic" className={`object-cover rounded-t-lg`} fill/>
                    </div>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-sm text-navyBlue `}>
                            <p className={`space-y-1 text-lg text-navyBlue ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                        </div>

                </div>
                <div className={`w-full `}>
                    <div className={`relative w-full h-[400px]`}>
                        <Image src="/images/amg.jpg" alt="mechanic" className={`object-cover rounded-t-lg`} fill/>
                    </div>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-sm text-navyBlue `}>
                            <p className={`space-y-1 text-lg text-navyBlue ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                        </div>

                </div>

            </div>
                <div className={` ml-10 w-[1600px] h-[600px] rounded-xl mt-10 grid grid-cols-[2fr_1fr] gap-2`}>
                      <div className={` w-full `}>
                        <div className={`relative mx-auto w-full min-w-[400px] h-[600px]`}>
                    <Image src="/images/g-wagon 2.jpg" alt="Background" className={`rounded-xl object-cover `} fill />
                        </div>

                      </div>

                      <div className={`bg-white rounded-xl`}>
                       <h1 className={`${exoFont.className} text-3xl text-darkSky font-bold text-center pt-5`}>BEST SELLING VEHICLE OF 2021 MERCEDES G-WAGON</h1>
                       <p className={`text-lg ${sairaFont.className} pt-5 pl-2 pr-2 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>
                       
              <Link href=""> <button className={`${exoFont.className} animate-pulse bg-newOrange text-white mt-2 pt-3 pb-3  rounded-xl text-xl w-[150px] cursor-pointer`}>Learn More</button></Link>
           



                      </div>
                </div>


        <Footer></Footer>       
        </div>
    )
}

