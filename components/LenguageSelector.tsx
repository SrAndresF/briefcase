import { useRouter } from "next/router"
export default function LenguageSelector() {

  const router = useRouter();

  const changeLang = (e: any) => {
    router.push(router.pathname, router.pathname , {
      locale: e.target.value,
    })}

  return (
      <select onChange={changeLang} className=" rounded-xl mx-2 hover:translate-y-1 transition-all w-20" >
      <option value="es" >Español</option>
      <option value="en" >English</option>
      </select>
  )
}
