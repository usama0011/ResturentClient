import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";
import Head from "next/head";
export default function index() {
  return (
    <div>
                <Head>
            <title>Nos SPA</title>
        </Head>
      <img src="/images/image1.jpg" className="w-full transition duration-200 hover:brightness-75 h-96 object-cover" />

      <div className="w-full max-w-lg mx-auto px-4">
        <Header>Découvrer notre spa</Header>
        <p className="w-full text-gray-700 max-w-xl px-4 text-center mx-auto mt-4">
          De brillantes synthèses un grain de poussière suspendu dans un rayon
          de soleil à travers les siècles un grain de poussière suspendu dans un
          réseau de rayons de soleil de trous de ver que le ciel nous appelle et
          des milliards sur des milliards sur des milliards sur des milliards
          sur des milliards sur des milliards sur des milliards.
        </p>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton>Voir</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
