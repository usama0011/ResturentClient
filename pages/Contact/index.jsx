import Head from "next/head";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";
import ImageOne from '../../public/images/one.svg'
import ImageTwo from '../../public/images/two.svg'
export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="pt-5 pb-10">
        <Header>Nous contacter</Header>
      </div>
      <div className=" pt-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className=" mt-5 grid grid-cols-1 gap-2 md:grid-cols-2  ">
          <div className="">
            <div className="grid grid-cols-2  mx-2 gap-2 p-2 ">
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  className="border px-2 focus:ring-2 focus:ring-primary-color  py-2 outline-none border-gray-400"
                  type="text"
                  placeholder="nom"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Prenom
                </label>
                <input
                  className="border focus:ring-2 focus:ring-primary-color border-gray-400 px-2 py-2 outline-none"
                  type="text"
                  placeholder="Prenom"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Adresse Mail
                </label>
                <input
                  className="border focus:ring-2 focus:ring-primary-color border-gray-400 px-2 py-2 outline-none"
                  type="text"
                  placeholder=" Adresse Mail"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Numéro
                </label>
                <input
                  className="border focus:ring-2 focus:ring-primary-color border-gray-400 px-2 py-2 outline-none"
                  type="text"
                  placeholder="  Numéro"
                />
              </div>
              <div className="flex grid col-span-2 w-full flex-col">
                <label className="font-semibold pb-2" htmlFor="name">
                  Société
                </label>
                <input
                  className="border focus:ring-2 focus:ring-primary-color   border-gray-400 px-2 py-2 outline-none"
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
                className="border focus:ring-2 focus:ring-primary-color p-3 border-gray-300 w-full outline-none"
                rows="9"
              ></textarea>
            </div>
            <button className="bg-primary-color hover:shadow-xl mt-4  ml-4 cursor-pointer text-white px-8 rounded-sm py-2">
              Envoyer
            </button>
          </div>
          <div className="mt-10  md:ml-20 mx-3 rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              alt=""
              className=" transition duration-200 hover:brightness-75 object-contain rounded-sm  h-full md:w-96 w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
