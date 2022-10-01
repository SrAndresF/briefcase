import Link from "next/link"
import { Menu } from '@headlessui/react'

import { AiOutlineMenu } from "react-icons/ai"
export default function Navbar() {
  return (
    <header>
      <nav className=" text-text dark:text-text-dark">
      <ul className="flex flex-rap flex-col items-end lg:h-screen z-50 lg:bg-white lg:w-1/12 fixed lg:dark:bg-principal-dark">
      <div className="lg:hidden">
      <Menu>
      <Menu.Button>
        <div className="ml-7 rounded-full bg-white p-2 mt-3  dark:bg-principal-dark">
        <AiOutlineMenu className=" text-3xl"/>
        </div>
      </Menu.Button>
      <div className="bg-white dark:bg-principal-dark flex flex-wrap flex-col rounded-lg  ">
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <Link href="/" ><li className=" mr-14 ml-3 dark:bg-principal-dark border-b-4 border-text w-14  cursor-pointer mt-28  bg-white  hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >HOME</a></li></Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/#about" ><li className="ml-3 dark:bg-principal-dark border-b-4 border-text w-14  cursor-pointer  mt-12  bg-white   hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white dark:bg-principal-dark w-14" >ABOUT</a></li></Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active})=>(
            <Link href="/#proyects" ><li className="ml-3 dark:bg-principal-dark border-b-4 border-text w-14 mt-12  cursor-pointer bg-white  hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark " >PROYECTS</a></li></Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active})=>(
            <Link href="/#services" ><li className="ml-3 mt-12 dark:bg-principal-dark border-b-4 w-14 border-text lg:mt-28 cursor-pointer bg-white  hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >SERVICES</a></li></Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({active})=>(
            <Link href="/contact" ><li className="ml-3 mb-28 mt-12 dark:bg-principal-dark border-b-4 border-text w-14  cursor-pointer bg-white  hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >CONTACT</a></li></Link>
          )}
        </Menu.Item>
      </Menu.Items>
      </div>
    </Menu>
      </div>


      <Link href="/" ><li className=" lg:block hidden dark:bg-principal-dark border-b-4 border-text w-14  cursor-pointer mt-28 lg:mt-16 bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark " >HOME</a></li></Link>
      <Link href="/#about" ><li className="lg:block hidden dark:bg-principal-dark border-b-4 border-text w-14 cursor-pointer  mt-12 lg:mt-28 bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white dark:bg-principal-dark" >ABOUT</a></li></Link>
      <Link href="/#proyects" ><li className=" lg:block hidden dark:bg-principal-dark border-b-4 border-text w-14 mt-12 lg:mt-28 cursor-pointer bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark " >PROYECTS</a></li></Link>
      <Link href="/#services" ><li className="lg:block hidden mt-12 dark:bg-principal-dark border-b-4 border-text w-14 lg:mt-28 cursor-pointer bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >SERVICES</a></li></Link>
      <Link href="/contact" ><li className="lg:block hidden mt-12 dark:bg-principal-dark border-b-4 border-text w-14 lg:mt-28 cursor-pointer bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >CONTACT</a></li></Link>
      </ul>
    </nav>
    </header>
  )
}
