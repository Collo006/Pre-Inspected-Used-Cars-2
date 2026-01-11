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
            <h1 className={`${exoFont.className} sm:text-3xl text-xl text-darkSky font-bold text-center`}>ABOUT PINUC DEALERSHIP</h1>
            <div className={`bg-white ml-0 w-screen  `}>
                <div className={`relative sm:mx-auto sm:w-full sm:min-w-[400px] sm:h-[700px] h-[200px]`}>
                <Image src="/images/tow-truck.jpg" alt="Background" className={` object-cover `} fill />
                </div>
                <p  className={`sm:w-screen w-full sm:text-md text-sm ${sairaFont.className} pt-10 pl-1 pr-2 pb-10 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.&quot;There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.&quot;</p>
            </div> 
            <div className={`bg-lightSky ml-0 w-screen rounded-xl mt-10 `}>
               <div className={`relative sm:mx-auto sm:w-full sm:min-w-[400px] sm:h-[700px] h-[200px]`}>
                <Image src="/images/peopel.jpg" alt="Background" className={` object-cover `} fill />
                </div> 
                </div> 
                <div className={`sm:ml-1 sm:mr-1 w-screen sm:h-[600px]  sm:rounded-xl mt-10 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-1 grid grid-cols-1`}>
                      <div className={` w-full `}>
                        <div className={`relative sm:mx-auto w-full sm:min-w-[400px] sm:h-[600px] h-[400px]`}>
                    <Image src="/images/people.jpg" alt="Background" className={`sm:rounded-xl object-cover `} fill />
                        </div>

                      </div>

                      <div className={`bg-white rounded-xl w-screen`}>
                       <h1 className={`${exoFont.className} sm:text-3xl text-xl text-darkSky font-bold text-center pt-5`}>WHY CHOOSE PINUC</h1>
                       <p className={`sm:text-md text-sm  ${sairaFont.className} pt-5  text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>
                        <p className={`sm:text-md text-sm  ${sairaFont.className} pt-5  text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>

                        <p className={`sm:text-md text-sm ${sairaFont.className} pt-5  text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>

                      </div>
                </div>
            <h2 className={`${exoFont.className} sm:text-2xl text-xl text-darkSky font-bold text-center pt-5`}>RECENT EXPERT REVIEWS</h2>
            <div className={`bg-white ml-0 w-screen sm:h-[600px] h-auto rounded-xl mt-10 sm:grid sm:grid-cols-3 sm:gap-1 grid grid-cols-1`}>
                <div className={`w-full `}>
                    <div className={`relative sm:w-full w-screen sm:h-[400px] h-[200px]`}>
                        <Image src="/images/mechanic.jpg" alt="mechanic" className={`object-cover rounded-t-lg`} fill/>
                    </div>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-navyBlue `}>
                            <p className={`space-y-1 sm:text-md text-sm text-navyBlue ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                        </div>
                </div>
                <div className={`w-full `}>
                    <div className={`relative sm:w-full w-screen sm:h-[400px] h-[200px]`}>
                        <Image src="/images/oldies.jpg" alt="mechanic" className={`object-cover rounded-t-lg`} fill/>
                    </div>
                     <div className={`p-2`}>
                         <div className={`space-y-1  text-navyBlue `}>
                            <p className={`space-y-1 sm:text-md text-sm  text-navyBlue ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                        </div>

                </div>
                <div className={`w-full `}>
                    <div className={`relative sm:w-full w-screen sm:h-[400px] h-[200px]`}>
                        <Image src="/images/amg.jpg" alt="mechanic" className={`object-cover rounded-t-lg`} fill/>
                    </div>
                     <div className={`p-2`}>
                         <div className={`space-y-1 text-navyBlue `}>
                            <p className={`space-y-1 sm:text-md text-sm  text-navyBlue ${sairaFont.className}`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true.It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it.</p>
                         </div>
                        </div>

                </div>

            </div>
                <div className={` sm:ml-1 w-screen h-[600px] sm:rounded-xl mt-10 sm:grid sm:grid-cols-[2fr_1fr] grid grid-cols-1 gap-1`}>
                      <div className={` `}>
                        <div className={`relative mx-auto sm:w-full min-w-[400px] sm:h-[600px] w-screen h-[200px]`}>
                    <Image src="/images/g-wagon 2.jpg" alt="Background" className={`sm:rounded-xl object-cover `} fill />
                        </div>

                      </div>

                      <div className={`bg-white rounded-xl`}>
                       <h1 className={`${exoFont.className} sm:text-2xl text-xl text-darkSky font-bold text-center pt-5`}>BEST SELLING VEHICLE OF 2021 MERCEDES G-WAGON</h1>
                       <p className={`sm:text-md text-sm ${sairaFont.className} pt-5 pl-2 pr-2 text-navyBlue`}>There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was,but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.</p>
                       
              <Link href=""> <button className={`${exoFont.className} animate-pulse bg-newOrange text-white mt-2 pt-3 pb-3  rounded-xl sm:text-md text-sm sm:w-[150px] w-[100px] cursor-pointer`}>Learn More</button></Link>
           



                      </div>
                </div>


        <Footer></Footer>       
        </div>
    )
}

