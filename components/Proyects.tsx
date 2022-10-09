

import Image from "next/image";
import Link from "next/link";
export default function Proyects({heard}:{heard:any}) {

  return (
    <div id="proyects">
      <div className="lg:ml-navbar  flex flex-wrap justify-start  text-center mt-44 flex-row">
        <div className="flex flex-col text-left ml-7 mb-7 w-screen">
        <h3 className="font-medium text-5xl ">{heard}</h3>
    </div>
      <div className="grid grid-rows-1 lg:grid-rows-3 grid-cols-1 lg:grid-cols-3 grid-flow-row gap-6 ml-7 mt-7 ">
        
        <div className="px-2 py-3 bg-white dark:bg-hover-dark rounded-2xl flex justify-center items-center flex-col hover:translate-x-1 hover:translate-y-1" >
          <Image src="/img/lospinos.png" width={1366 / 4} height={699 / 4} alt="los pinos logo" />
          <p className="mt-3" >LOS PINOS </p>
          <h4 className=" text-star cursor-pointer " ><Link href={`/`}>Process..</Link></h4>
        </div>
        <div className="bg-white dark:bg-hover-dark rounded-2xl flex justify-center items-center flex-col hover:translate-x-1 hover:translate-y-1" >
          <Image src="/img/schedule.png" width={1366 / 4} height={699 / 4} alt="schedule" />
          <p className="mt-3" >SCHEDULE</p>
          <h4 className=" text-star cursor-pointer " ><Link href={`/`}>Process..</Link></h4>
        </div>
        <div className="bg-white dark:bg-hover-dark rounded-2xl flex justify-center items-center flex-col hover:translate-x-1 hover:translate-y-1" >
          <Image src="/img/arduino.png" width={1366 / 4} height={699 / 4} alt="arduino proyecto" />
          <p className="mt-3" >ARDUINO</p>
          <h4 className=" text-star cursor-pointer " ><Link href={`/`}>Process..</Link></h4>
        </div>
        <div className="bg-white dark:bg-hover-dark rounded-2xl flex justify-center items-center flex-col hover:translate-x-1 hover:translate-y-1" >
          <Image src="/img/emotional.png" width={512 / 3} height={512 / 3} alt="emocional app pantalla inicio" />
          <p className="mt-3" >APP EMOTIONAL</p>
          <h4 className=" text-star cursor-pointer " ><Link href={`/`} >Process..</Link></h4>
        </div>
        <div className="bg-white dark:bg-hover-dark rounded-2xl flex justify-center items-center flex-col hover:translate-x-1 hover:translate-y-1" >
          <Image src="/img/sebasport.png" width={1366 / 4} height={699 / 4} alt="sebasport" />
          <p className="mt-3" >SEBASPORT</p>
          <h4 className=" text-star cursor-pointer " ><Link href={`/`}>Process..</Link></h4>
        </div>
        <div className="bg-white dark:bg-hover-dark rounded-2xl flex justify-center items-center flex-col hover:translate-x-1 hover:translate-y-1" >
          <h4>coming soon..</h4>
        </div>
      </div>
    </div>
    </div>
  )
}
