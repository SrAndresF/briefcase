import Layout from "../components/layout/Main"
import Image from "next/image"
import About from "../components/About"
import Services from "../components/Services"
import Proyects from "../components/Proyects"
import Footer from "../components/Footer"
import { FaGithub, FaInstagram, FaFacebook, FaMoon, FaStar, FaArrowDown, FaSun} from 'react-icons/fa'
import { useTheme } from 'next-themes'
import Link from "next/link"
import LenguageSelector from "../components/LenguageSelector"

const Home = (props: any) => {
  const { home } = props;
  const {theme, setTheme } = useTheme()
  return (
    <>
    <Layout title="" home={home.navHome} about={home.navAbout} proyects={home.navProyects} services={home.navServices} contact={home.navContact} >
    <main className=" bg-principal dark:bg-principal-dark text-text dark:text-text-dark-h2">

      <div className=" flex w-full flex-row-reverse items-center dark:bg-principal-dark">
        <div className=" mt-3 mr-8 flex flex-row justify-center items-center dark:bg-principal-dark ">
          <LenguageSelector />
          <Link href="https://github.com/SrAndresF" target="_blank" ><FaGithub  className="mr-2 h-5 w-5 cursor-pointer hover:transition-all hover:translate-y-1 dark:bg-principal-dark dark:hover:bg-hover-dark rounded-full" /></Link>
          <Link href="https://www.instagram.com/andres.fgv/" target="_blank">
          <FaInstagram  className="mr-2 h-5 w-5 cursor-pointer hover:transition-all hover:translate-y-1 dark:bg-principal-dark dark:hover:bg-hover-dark rounded-full" /></Link>
          <Link href="https://www.facebook.com/andres.valdes.35977/" target="_blank">
          <FaFacebook  className=" rounded-full mr-2 h-5 w-5 cursor-pointer hover:transition-all hover:translate-y-1 dark:bg-principal-dark dark:hover:bg-hover-dark" /></Link>
          <Image src="/img/Logo.png" width="60" height="60" alt="Andres Logo"  className="dark:bg-principal-dark "/>
      </div>
      
      <div className="flex flex-row w-8/12  mt-3 ">
        <button className=" ml-24 lg:ml-0 dark:hover:bg-hover-dark rounded-full bg-white dark:bg-principal-dark  w-12 h-12 flex flex-wrap justify-center items-center hover:transition-all hover:shadow-sm hover:translate-y-1 hover:translate-x-1 cursor-pointer" onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} >
        {theme === 'light' ? 
        <FaMoon  className="bg-white text-lg"/>
        : <FaSun className="text-lg bg-inherit hover:bg-hover-dark rounded-full" /> }
        </button>
      </div>
      </div>

      
      

      <div className=" lg:ml-navbar  flex flex-wrap justify-center items-center text-center my-44  ">
        <div >
          <div className=" float-right text-star animate-bounce">
          <FaStar />
          </div>

        <div className="flex flex-col">
        <h2 className=" font-medium text-5xl dark:text-text-dark-h2 text-text">
          {home.title}
        </h2>
        <p className="dark:text-dark">
        {home.descriptionTitle}
        <br />
        marketing and benchmarket
        </p>
        </div>
        </div>
      </div>

      <div className="bg-white dark:bg-hover-dark  flex  justify-between items-center lg:ml-navbar p-2" >
        <p  className="bg-white lg:w-1/3 lg:ml-3 dark:bg-hover-dark ml-3 mr-7">{home.description}</p>
        <div className="bg-white flex lg:flex-row mr-8 dark:bg-hover-dark flex-col">
          <h4 className="bg-white  mr-2 dark:bg-hover-dark lg:font-normal font-bold">{home.button}</h4>
          <FaArrowDown className="bg-white text-3xl mt-3 dark:bg-hover-dark"/>
        </div>
      </div>

      
      <About heard={home.aboutTitle} description={home.aboutDescription} />
      <Proyects heard={home.proyectsTitle} />
      <Services heard={home.servicesTitle} />
      <Footer />

    </main>
    </Layout>
    </>
  )
}

export default Home

export async function getStaticProps({locale}:{locale: any}) {
  const res = await import(`../lang/${locale}.json`)
  return {
    props: {
      home: res.default.home,
    }, 
  }
}