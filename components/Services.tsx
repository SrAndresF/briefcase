import Image from "next/image";
export default function Services({heard}:{heard:any}) {
  return (
    <div id="services">
      <div id="proyects">
      <div className="lg:ml-navbar  flex flex-wrap justify-start  text-center mt-12 flex-row">
        <div className="flex flex-col text-left ml-7 mb-7 w-screen">
        <h3 className="font-medium text-5xl ">{heard}</h3>
    </div>
      
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1  lg:gap-5 lg:ml-7 mb-36 ml-7 mr-7">
        <div className="bg-white dark:bg-hover-dark  rounded-2xl p-2 hover:translate-x-1 hover:translate-y-1">
          <h4 className="  font-normal text-lg mb-3">Google Ads</h4>
          <Image src="/img/googleads.png"  width={46.15 * 10} height={25.96 * 10} alt="GoogleAds" />
        </div>
        <div className="bg-white dark:bg-hover-dark  rounded-2xl p-2 hover:translate-x-1 hover:translate-y-1 lg:mt-0 mt-7">
          <h4 className=" font-normal text-lg mb-3">Software Developer</h4>
          <Image src="/img/software.jpg"  width={4288 / 9} height={2848 / 9}  alt="SoftwareDeveloper" />

        </div>
      </div>

      </div>
      </div>

    </div>
  )
}
