import Image from 'next/image';


export default function About({heard, description}:{heard:any, description: any}) {
 
  return (
    <div id="about">
      <div className="lg:ml-navbar  flex flex-wrap justify-start items-center text-center mt-44 flex-row ">
        <div className="flex flex-col text-left ml-7">
        <h3 className="font-medium text-5xl ">{heard}</h3>
        <p className=" lg:w-1/3 ml-3 mt-12 mr-7 lg:mr-0">
        {description}
        </p>
        </div>


        <div className="grid grid-flow-row grid-cols-2 sm:grid-row-3 lg:grid-cols-3 grid-rows-4 lg:grid-rows-3 gap-4 dark:text-text-dark">

          <div  title="HTML" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark dark:text-text-dark">
            <div  className="bg-white py-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark" >HTML</h4>
            </div>
          </div>

          <div  title="CSS" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/css.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark" >CSS</h4>
            </div>
          </div>


          <div  title="JAVASCRIPT" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/js.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" alt="javascript logo" />
            <h4 className="bg-white dark:bg-hover-dark"  >JAVASCRIPT</h4>
            </div>
          </div>
          <div  title="REACT" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/react.png" width={1200 / 19} height={1043 / 19}  className="bg-white dark:bg-hover-dark bg-cover bg-" alt="react logo" />
            <h4 className="bg-white dark:bg-hover-dark" >REACT</h4>
            </div>
          </div>
          <div  title="REACT NATIVE" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/expo.png" width={512 / 10} height={512 / 10}  className="bg-white dark:bg-hover-dark bg-cover" alt="expo logo" />
            <h4 className="bg-white dark:bg-hover-dark" >EXPO</h4>
            </div>
          </div>
          <div  title="NODE JS" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark mt-2">
            <Image src="/img/node.png" width={1280 / 19} height={783 / 19}  className="bg-white dark:bg-hover-dark bg-cover" alt="nodejs png logo" />
            <h4 className="bg-white dark:bg-hover-dark" >NODE JS</h4>
            </div>
          </div>
          <div title="MONGODB"  className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark mt-3">
            <Image src="/img/mongodb.png" width={2560 / 25} height={690 / 25}  className="bg-white dark:bg-hover-dark bg-center bg-cover " alt="mongodb logo png" />
            <h4  title="" className="bg-white dark:bg-hover-dark" >MONGODB</h4>
            </div>
          </div>
          <div  title="FIREBASE" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/firebase.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" alt="firebase google png logo" />
            <h4 className="bg-white dark:bg-hover-dark" >FIREBASE</h4>
            </div>
          </div>
          <div  title="NEXT JS" className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/img/nextjs.png" width={256 / 5} height={281 / 5}  className="bg-white dark:bg-hover-dark"  alt="nextjs logo png vercel" />
            <h4 className="bg-white dark:bg-hover-dark" >NEXT JS</h4>
            </div>
          </div>

        
        </div>
        <div className=" flex justify-center items-center lg:ml-20 ">
          <Image src="/img/spline.png" width={3240 / 6} height={2160 / 6} alt="3d design" />
          </div>

      </div>

    </div>
  )
}
export async function getStaticProps({locale}:{locale: any}) {
  const res = await import(`../lang/${locale}.json`)
  return {
    props: {
      about: res.default.about,
    }, 
  }
}