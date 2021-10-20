import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { useRef } from "react";

SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]);


export default function Banner() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className=" w-full h-96 relative">
      <Swiper
        id="main"
        className="h-full"
        effect="fade"
        autoplay={true}
        loop={true}
        speed={1000}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="bg-white absolute top-1/2 transform -translate-y-full left-4 w-10 h-10 z-10 flex justify-center items-center rounded-full"
      >
        <ChevronLeftIcon className="w-10 h-5" />
      </button>
      <button
        ref={navigationNextRef}
        className="bg-white w-10 h-10 absolute top-1/2 transform -translate-y-full right-4 z-10 flex justify-center items-center rounded-full ml-2"
      >
        <ChevronRightIcon className="w-10 h-5" />
      </button>
    </div>
  );
}

const SlideOne = () => {
  return (
    <div className="relative w-full h-full">
      <di className="absolute inset-0">
        <img src="/images/image1.jpg" className="w-full h-full object-cover" />
      </di>
      <div className="absolute w-full h-full bg-black/40" />

      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <h1 className="font-semibold md:text-6xl text-center text-white text-3xl font-Snel-BT">
          Bienvenue à Hotely
        </h1>
        <p className="text-lg text-white uppercase mt-4 font-Roboto">
          L'endroit où vous cherchez
        </p>
        <Link href="/chambre">
          <button className="px-6 h-10 rounded-lg bg-white mt-6">
            Explorer maintenant
          </button>
        </Link>
      </div>
    </div>
  );
};
const SlideTwo = () => {
  return (
    <div className="relative w-full h-full">
      <di className="absolute inset-0">
        <img src="/images/image5.jpg" className="w-full h-full object-cover" />
      </di>
      <div className="absolute w-full h-full bg-black/40" />

      <div className="w-full h-full relative flex flex-col items-center justify-center">
        <h1 className="font-semibold md:text-6xl text-white text-center text-3xl font-Snel-BT">
        Découvrez nos chambres luxueuses
        </h1>
        <p className="text-lg text-white uppercase mt-4 font-Roboto">
        Il y en a pour tous les goûts
        </p>
        <Link href="/Hotel">
          <button className="px-6  rounded-lg h-10 bg-white mt-6">
            Voir maintenant
          </button>
        </Link>
      </div>
    </div>
  );
};
