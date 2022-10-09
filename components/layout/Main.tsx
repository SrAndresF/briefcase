import Head from "next/head"
import Navbar from "./Navbar"
export default function Layout({title, children, home, about, proyects, services, contact}:{title:string, children: any,home:any, about:any, proyects:any, services:any, contact:any}) {
  return (
    <>
    <Head><title> {title? ` ${title} | Andres G 🦤`: 'Andres G 🦤 | Software Developer '} </title>
    <meta name="description" content="briefcase web designer dev developer frontend backend react next js web site presentation"  /></Head>
    <Navbar home={home} about={about} proyects={proyects} services={services} contact={contact} />
    {children}
    </>
  )
}
