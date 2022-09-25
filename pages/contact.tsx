import Layout from "../components/layout/Main";
import dynamic from "next/dynamic";
import { Suspense } from 'react'
import {FiDownload} from 'react-icons/fi'


const ContactComponent = dynamic(()=> import('../components/Contact'),{ 
suspense:true,
})
export default function Contact() {
  return (
      <Suspense fallback={<div className=" w-screen z-50 h-screen relative bg-star"><h1 className="bg-star font-bold text-5xl text-text">Cargando....</h1></div>} >
      <Layout title="Contact" >
      <main className=" items-center bg-principal flex flex-col dark:bg-principal-dark lg:ml-navbar  font-oswald h-screen lg:flex lg:justify-center lg:flex-row ">
      <ContactComponent />
      <button className="  hover:bg-star mt-7 lg:ml-36 w-32 h-10 bg-white rounded-lg p-2 dark:bg-hover-dark flex flex-row text-text dark:hover:bg-text-dark hover:translate-x-1 hover:translate-y-1">
      <a href="./cv.pdf" download className=" dark:text-white font-semibold">Download cv</a><FiDownload className=" animate-bounce ml-2 mt-1" />
      </button>
      </main>
      </Layout>
      </Suspense>

      
  )
}
