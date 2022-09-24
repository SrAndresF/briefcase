import Head from "next/head"
import Navbar from "./Navbar"
export default function Layout({title, children}:{title:string, children: any}) {
  return (
    <>
    <Head><title> {title? ` ${title} | Andres G 🦤`: 'Andres G 🦤 | Software Developer '} </title></Head>
    <Navbar/>
    {children}
    </>
  )
}
