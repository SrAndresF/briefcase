export default function Contact({title, inputN, inputM, inputD, inputS}:{title:any, inputN: any, inputM:any, inputD:any, inputS:any}) {
  return (
    <div className=" text-text dark:text-white flex justify-center items-center  lg:ml-36 lg:mt-0 mt-7">
      <form action="https://formsubmit.co/60c6b53d2e3c0d0905178b11b57d4360" method="POST" className="flex flex-col" >
      <h2 className=" text-3xl text-center">{title}</h2>

      <h3 className="mt-3">{inputN}</h3>
      <input type="text" name="name" className=" outline-none rounded-sm mt-3" />
      <h3 className="mt-3">{inputM}</h3>
      <input type="email" name="email" className=" outline-none rounded-sm mt-3" />
      <h3 className="mt-3 mb-3">{inputD}</h3>
      <textarea name="description" cols={40} rows={7} className=" outline-none rounded-sm lg:w-96"  ></textarea>
      <input type="submit" value={inputS} className=" mt-3 p-2 bg-white hover:bg-star dark:bg-hover-dark rounded-lg hover:translate-x-1 hover:translate-y-1 dark:hover:bg-text-dark cursor-pointer" />

      <input type="hidden" name="_next" value="http://andresg.vercel.app/contact" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Portafolio Cliente!!!" />
      <input type="text" name="_honey" style={{'display':'none'}} />
      <input type="hidden" name="_autoresponse" value="your custom message" />



    
    </form>
    </div>
    )
}
