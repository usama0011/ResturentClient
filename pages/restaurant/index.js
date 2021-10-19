import Head from "next/head";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";

export default function Restaurant() {
  return (
    <div>

        <Head>
            <title>Restaurant</title>
        </Head>
      <img src="/images/image5.jpg" className="w-full h-96 object-cover" />

      <br />
      <br />
      {/* <Header>Notre carte</Header>

      <div className="w-full max-w-md h-96 mx-auto mt-4 border flex justify-center items-center">
        Card
      </div>
      <br />
      <br /> */}
      <Header>Notre carte</Header>
      <div className="w-full space-y-8 max-w-md flex flex-col justify-center items-center mx-auto mt-4">
          <ul className="w-full space-y-4">
              <FoodMenuItem name="Moules Marinières" price={100.00} />
              <FoodMenuItem name="Blanquette de Veau" price={200.00} />
              <FoodMenuItem name="Steak Tartare" price={90.99} />
              <FoodMenuItem name="Cassoulet" price={50.00} />
              <FoodMenuItem name="Confit de Canard" price={100.00} />
          </ul>
          <PrimaryButton>Reserver une table</PrimaryButton>
      </div>
    </div>
  );
}

const FoodMenuItem = ({ name, price }) => {
  return (
    <li className="w-full flex justify-between items-center">
      <h5>{name}</h5>
      <h1 className="font-semibold text-xl text-primary-color">${price}</h1>
    </li>
  );
};
