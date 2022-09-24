import Link from "next/link"
export default function Navbar() {
  return (
    <header>
      <nav className=" text-text dark:text-text-dark">
      <ul className="flex flex-wrap flex-col items-end h-screen bg-white w-1/12 fixed dark:bg-principal-dark">
      <Link href="/" ><li className=" dark:bg-principal-dark border-b-4 border-text w-14  cursor-pointer mt-16 bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark " >HOME</a></li></Link>
      <Link href="/#about" ><li className=" dark:bg-principal-dark border-b-4 border-text w-14 cursor-pointer  mt-28 bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white dark:bg-principal-dark" >ABOUT</a></li></Link>
      <Link href="/#proyects" ><li className=" dark:bg-principal-dark border-b-4 border-text w-14 mt-28 cursor-pointer bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark " >PROYECTS</a></li></Link>
      <Link href="/#services" ><li className=" dark:bg-principal-dark border-b-4 border-text w-14 mt-28 cursor-pointer bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >SERVICES</a></li></Link>
      <Link href="/contact" ><li className=" dark:bg-principal-dark border-b-4 border-text w-14 mt-28 cursor-pointer bg-white mr-10 hover:translate-x-1 hover:transition-all"><a className=" font-medium bg-white  dark:bg-principal-dark" >CONTACT</a></li></Link>
      </ul>
    </nav>
    </header>
  )
}
