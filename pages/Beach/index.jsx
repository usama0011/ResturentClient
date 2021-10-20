import { BeakerIcon } from "@heroicons/react/outline";

function index() {
  return (
    <div>
      <div className="w-full md:h-96 relative  lg:h-96 object-cover">
        <img
          src="/images/last.jpg"
          className="w-full hover:brightness-75 z-0 transition duration-300 md:h-96 lg:h-96 object-cover"
          alt=""
        />
      </div>
      <div className="flex absolute   top-48 md:top  pt-10 md:absolute md:left-96 md:top-28 shadow-lg pb-10  bg-indigo-600 text-white  rounded-lg md:w-96 lg:w-96 mx-5  md:mx-auto">
        <div>
          <img
            className="h-16 pl-3"
            src="https://img.icons8.com/doodle/48/000000/beach--v1.png"
          />
        </div>
        <div className=" px-5">
          <h1 className="  text-3xl font-semibold">
            Advanture <br /> <span>Holidays & Tours</span>
          </h1>
        </div>
      </div>
      <div className="grid md:max-w-5xl lg:max-w-5xl  px-10 w-full   md:px-1 gap-3 md:mt-10 lg:mt-10 mt-44 md:mx-auto grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div className="border hover:shadow-lg transition-all duration-300 cursor-pointer pb-10 bg-gray-200 grid place-items-center">
          <img
            className=" h-18 mt-5 block  p-3 rounded-full"
            src="https://img.icons8.com/doodle/48/000000/beach-umbrella.png"
          />
          <h1 className="font-semibold pt-4">TOURS</h1>
          <p className="px-4 mt-3  text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            repellat rerum cupiditate consequatur laudantium repellendus?
          </p>
        </div>
        <div className="border hover:shadow-lg transition-all duration-300 cursor-pointer pb-10 bg-gray-200 grid place-items-center">
          <img
            className="h-18 mt-5 block  p-3 rounded-full"
            src="https://img.icons8.com/doodle/48/000000/mountain--v1.png"
          />
          <h1 className="font-semibold pt-4">HIKKING</h1>
          <p className="px-4 mt-3  text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            repellat rerum cupiditate consequatur laudantium repellendus?
          </p>
        </div>
        <div className="border hover:shadow-lg transition-all duration-300 cursor-pointer pb-10 bg-gray-200 grid place-items-center">
          <img
            className="h-18 mt-5 block  p-3 rounded-full"
            src="https://img.icons8.com/doodle/48/000000/mask-snorkel--v1.png"
          />
          <h1 className="font-semibold pt-4">SNORKEL</h1>
          <p className="px-4 mt-3  text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            repellat rerum cupiditate consequatur laudantium repellendus?
          </p>
        </div>
        <div className="border hover:shadow-lg transition-all duration-300 cursor-pointer pb-10 bg-gray-200 grid place-items-center">
          <img
            
            className="h-18 mt-5 block  p-3 rounded-full"
            src="https://img.icons8.com/doodle/48/000000/campfire--v1.png"
          />
          <h1 className="font-semibold pt-4">CAMPFIRE</h1>
          <p className="px-4 mt-3  text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            repellat rerum cupiditate consequatur laudantium repellendus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
