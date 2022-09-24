import Layout from "../components/layout/Main";
import dynamic from "next/dynamic";

const ContactComponent = dynamic(()=> import('../components/Contact'),{
  loading: () => <div className=" w-full z-50 h-full relative bg-star"><h1 className=" font-bold text-5xl text-text">Cargando....</h1></div>,
})

export default function Contact() {
  return (
    <Layout title="Contact" >
      <ContactComponent />
    </Layout>
  )
}
