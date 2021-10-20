import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import ProductCard from "../components/ProductCrad";
import Review from "../components/ReviewCard/Review";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hotel Reservation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <br />
      <Header>Qui sommes nous</Header>
      <p className="w-full text-gray-700 max-w-xl px-4 text-center mx-auto mt-4">
        De brillantes synthèses un grain de poussière suspendu dans un rayon de
        soleil à travers les siècles un grain de poussière suspendu dans un
        réseau de rayons de soleil de trous de ver que le ciel nous appelle et
        des milliards sur des milliards sur des milliards sur des milliards sur
        des milliards sur des milliards sur des milliards. Le courage de nos
        questions cœurs des étoiles au bord du royaume éternel des galaxies, pas
        un lever de soleil mais une galaxie s'élèvent, la seule maison que nous
        ayons jamais connue.
      </p>
      <br />
      <Header>Nos gammes</Header>

      <div className="mt-4 flex justify-center flex-wrap gap-4">
        <ProductCard imgUrl="/images/image2.jpg" title="Chambre Confort" />
        <ProductCard imgUrl="/images/image3.jpg" title="Chambre de luxe" />
        <ProductCard imgUrl="/images/image4.jpg" title="Chambre supérieure" />
      </div>

      <div className="flex flex-wrap mt-40 justify-center gap-10 px-4">
        <div className="">
          <h2 className="text-lg font-semibold ">Nom Chambre</h2>
          <p className="w-full text-gray-700 max-w-xl mt-2">
            Avec une grande variété de chambres et suites luxueuses, il y en a
            pour tous les goûts. Une toute petite scène dans une vaste arène
            cosmique des morceaux de peluches en mouvement prennent racine et
            fleurissent un grain de poussière suspendu dans des anneaux de
            rayons de soleil.
          </p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="font-semibold text-2xl text-primary-color">
              $50.00
            </h1>
            <a href="/chambre">
              <PrimaryButton>Voir</PrimaryButton>
            </a>
          </div>
        </div>

        <img
          src="/images/image3.jpg"
          className="w-full rounded-lg hover:scale-110  transition-all duration-300  hover:brightness-75 max-w-sm h-80 object-cover"
        />
      </div>

      <br />
      <br />
      <div className="w-full max-w-lg mx-auto px-4">
        <Header>Découvrer notre spa</Header>
        <p className="w-full tex text-gray-700 max-w-xl px-4 text-center mx-auto mt-4">
          De brillantes synthèses un grain de poussière suspendu dans un rayon
          de soleil à travers les siècles un grain de poussière suspendu dans un
          réseau de rayons de soleil de trous de ver que le ciel nous appelle et
          des milliards sur des milliards sur des milliards sur des milliards
          sur des milliards sur des milliards sur des milliards.
        </p>

        <div className="flex items-center justify-end mt-4">
          <a href="/Hotel">
            <PrimaryButton>Voir</PrimaryButton>
          </a>
        </div>
      </div>
      <br />
      <div className="max-w-5xl  mx-auto pb4 p-2 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Nos clints nous aiment</h1>
      </div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-2 md:mx-20 lg:mx-20 mx-2 ">
        <div className=" bg-white hover:shadow-xl p-2 hover:scale-110  transition-all duration-300 rounded-lg cursor-pointer">
          <Review
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem ea natus et, eos iure eligendi officiis at quidem laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem ea natus et, eos iure eligendi officiis at quidem laboriosam?"
            name="John Peter"
            ocupation="Software Developer"
            image="https://img.icons8.com/fluency/48/000000/star.png"
            userImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className=" bg-white hover:shadow-xl hover:scale-110  transition-all duration-300  delay-200 p-2 rounded-lg cursor-pointer">
          <Review
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem ea natus et, eos iure eligendi officiis at quidem laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem ea natus et, eos iure eligendi officiis at quidem laboriosam?"
            name="Alex Rawer"
            ocupation="Web Designer"
            image="https://img.icons8.com/fluency/48/000000/star.png"
            userImage="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95JTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className=" bg-white hover:shadow-xl hover:scale-110  transition-all duration-300 p-2 rounded-lg cursor-pointer">
          <Review
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem ea natus et, eos iure eligendi officiis at quidem laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem ea natus et, eos iure eligendi officiis at quidem laboriosam?"
            name="Azeem Akram"
            ocupation="PhotoGraper"
            image="https://img.icons8.com/fluency/48/000000/star.png"
            userImage="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95JTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
      <div className=" font-bold text-2xl pt-10 w-full">
        <h1 className=" w-full flex justify-center text-2xl font-bold">
          Nous contacter
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className=" mt-5 grid grid-cols-1 gap-2 md:grid-cols-2  ">
          <div className="">
            <div className="grid grid-cols-2  mx-2 gap-2 p-2 ">
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  className="border px-2 py-2 outline-none border-gray-200"
                  type="text"
                  placeholder="nom"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Prenom
                </label>
                <input
                  className="border border-gray-200 px-2 py-2 outline-none"
                  type="text"
                  placeholder="Prenom"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Adresse Mail
                </label>
                <input
                  className="border border-gray-200 px-2 py-2 outline-none"
                  type="text"
                  placeholder=" Adresse Mail"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Numéro
                </label>
                <input
                  className="border border-gray-200 px-2 py-2 outline-none"
                  type="text"
                  placeholder="  Numéro"
                />
              </div>
              <div className="flex grid col-span-2 w-full flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Société
                </label>
                <input
                  className="border   border-gray-200 px-2 py-2 outline-none"
                  type="text"
                  placeholder="Société"
                />
              </div>
            </div>
            <div className=" mx-4 ">
              <textarea
                name="message"
                id=""
                placeholder="Message..."
                cols="30"
                className="border p-3 border-gray-300 w-full outline-none"
                rows="9"
              ></textarea>
            </div>
            <button className="bg-primary-color hover:shadow-xl mt-4  ml-4 cursor-pointer text-white px-8 rounded-sm py-2">
              Envoyer
            </button>
          </div>
          <div className="mt-10 mx-3 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt=""
              className=" hover:scale-110  transition-all duration-300  rounded-xl hover:brightness-75 object-contain  h-full md:w-96 w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

