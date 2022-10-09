import Layout from "../components/layout/Main";
import dynamic from "next/dynamic";
import { Suspense } from 'react'
import {FiDownload} from 'react-icons/fi'


const ContactComponent = dynamic(()=> import('../components/Contact'),{ 
suspense:true,
})
export default function Contact(props:any) {
  const { contact } = props;

  return (
      <Suspense fallback={<div className=" w-screen z-50 h-screen relative bg-star"><h1 className="bg-star font-bold text-5xl text-center text-text-dark-h2">please await....</h1></div>} >
      <Layout title="Contact" home={contact.navHome} about={contact.navAbout} proyects={contact.navProyects} services={contact.navServices} contact={contact.navContact}>
      <main className=" items-center bg-principal flex flex-col dark:bg-principal-dark lg:ml-navbar  font-oswald h-screen lg:flex lg:justify-center lg:flex-row ">
      <ContactComponent title={contact.title} inputN={contact.inputName} inputM={contact.inputEmail} inputD={contact.inputDescription} inputS={contact.inputSubmit} />
      
      <button className="  hover:bg-star mt-7 lg:ml-36 w-36 h-10 bg-white rounded-lg p-2 dark:bg-hover-dark flex flex-row text-text dark:hover:bg-text-dark hover:translate-x-1 hover:translate-y-1">
      <a href="./cv.pdf" download className=" dark:text-white font-semibold">{contact.cv}</a><FiDownload className=" animate-bounce ml-2 mt-1" />
      </button>
      </main>
      </Layout>
      </Suspense>

      
  )
}



export async function getStaticProps({locale}:{locale: any}) {
  const res = await import(`../lang/${locale}.json`)
  return {
    props: {
      contact: res.default.contact,
    }, 
  }
}