import Head from "next/head";
import Header from "../../components/Header";
import MenuCard from "../../components/MenuCard";
import PrimaryButton from "../../components/PrimaryButton";
export default function Hotel() {
  return (
    <div>
      <Head>
        <title>Carte de l'hôtel</title>
      </Head>

      <div>
        <div className="w-full md:h-96 lg:h-96 object-cover">
          <img
            src="/images/image5.jpg"
            className="w-full hover:brightness-75 transition duration-300 md:h-96 lg:h-96 object-cover"
            alt=""
          />
        </div>
        <div className="w-full flex items-center">
          <h1 className="flex  pt-10 pb-10 font-bold text-2xl justify-center w-full">
            Le Menu du Jour
          </h1>
        </div>
        <div className="grid gap-y-10">
          <div>
            <MenuCard
              name="Mussels"
              description="  Avec une grande variété de chambres et suites luxueuses, il y en a
          pour tous les goûts. Une toute petite scène dans une vaste arène
          cosmique des morceaux de peluches en mouvement prennent racine et
          fleurissent un grain de poussière suspendu dans des anneaux de rayons
          de soleil."
              price="100$"
              imgUrl="https://media.istockphoto.com/photos/last-straw-picture-id516329534?b=1&k=20&m=516329534&s=170667a&w=0&h=O94bUYlaUOt9u5k7oBncU0Z-0kSVto4tYIjAvwTrS7Q="
            />
          </div>
          <div>
            <MenuCard
              name="Veal stew"
              description="  Avec une grande variété de chambres et suites luxueuses, il y en a
          pour tous les goûts. Une toute petite scène dans une vaste arène
          cosmique des morceaux de peluches en mouvement prennent racine et
          fleurissent un grain de poussière suspendu dans des anneaux de rayons
          de soleil."
              price="230$"
              imgUrl="https://images.unsplash.com/photo-1544025162-d76694265947?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <MenuCard
              name="Steak tartare"
              description="  Avec une grande variété de chambres et suites luxueuses, il y en a
          pour tous les goûts. Une toute petite scène dans une vaste arène
          cosmique des morceaux de peluches en mouvement prennent racine et
          fleurissent un grain de poussière suspendu dans des anneaux de rayons
          de soleil."
              price="300$"
              imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMG1lbnV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <MenuCard
              name="Cassoulet"
              description="  Avec une grande variété de chambres et suites luxueuses, il y en a
          pour tous les goûts. Une toute petite scène dans une vaste arène
          cosmique des morceaux de peluches en mouvement prennent racine et
          fleurissent un grain de poussière suspendu dans des anneaux de rayons
          de soleil."
              price="60$"
              imgUrl="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <MenuCard
              name="Duck confit"
              description="  Avec une grande variété de chambres et suites luxueuses, il y en a
          pour tous les goûts. Une toute petite scène dans une vaste arène
          cosmique des morceaux de peluches en mouvement prennent racine et
          fleurissent un grain de poussière suspendu dans des anneaux de rayons
          de soleil."
              price="190$"
              imgUrl="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-20">
        <PrimaryButton>Reserver une table</PrimaryButton>
      </div>
    </div>
  );
}
