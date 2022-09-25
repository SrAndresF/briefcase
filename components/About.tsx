import Image from "next/image"

export default function About() {
  const heard = '{ABOUT}'
  return (
    <div id="about">
      <div className="lg:ml-navbar  flex flex-wrap justify-start items-center text-center mt-44 flex-row ">
        <div className="flex flex-col text-left ml-7">
        <h3 className="font-medium text-5xl ">{heard}</h3>
        <p className=" lg:w-1/3 ml-3 mt-12 mr-7 lg:mr-0">
        I always strive to ensure customer satisfaction, I have a great 
        sense of learning and a great knowledge of current technologies.
         I am able to work both in a team and independently. I am looking
         for the possibility of showing my worth in the company/business
        /entrepreneurship with my knowledge.
        </p>
        </div>


        <div className="grid grid-cols-3 grid-rows-3 gap-3 dark:text-text-dark">

          <div className="bg-white rounded-2xl mt-7 ml-7 dark:bg-hover-dark dark:text-text-dark">
            <div className="bg-white py-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>


          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark" >HTML</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>
          <div className="bg-white rounded-2xl mt-3 ml-7 dark:bg-hover-dark">
            <div className="bg-white p-4 rounded-2xl dark:bg-hover-dark">
            <Image src="/html.png" width={50} height={50}  className="bg-white dark:bg-hover-dark" />
            <h4 className="bg-white dark:bg-hover-dark">HTML</h4>
            </div>
          </div>
          
          

        </div>

      </div>

    </div>
  )
}
