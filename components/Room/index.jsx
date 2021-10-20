import PrimaryButton from "../PrimaryButton";

export default function Room({name, price, imgUrl}) {
    return (
        <div className="flex flex-wrap justify-center gap-10 px-4">
        <div className="">
          <h2 className="text-lg font-semibold ">{name}</h2>
          <p className="w-full max-w-xl text-gray-700 mt-2">
            Avec une grande variété de chambres et suites luxueuses, il y en a
            pour tous les goûts. Une toute petite scène dans une vaste arène
            cosmique des morceaux de peluches en mouvement prennent racine et
            fleurissent un grain de poussière suspendu dans des anneaux de
            rayons de soleil.
          </p>
          <div className="flex justify-between items-center mt-4">
            <h1 className="font-semibold text-2xl text-primary-color">
              {price}
            </h1>
            <PrimaryButton>Voir</PrimaryButton>
          </div>
        </div>

        <img
          src={imgUrl}
          className="w-full hover:scale-110  rounded-lg transition duration-300 hover:brightness-75 max-w-sm h-80 object-cover"
        />
      </div>
    )
}

/*
 <NavLink path="/chambre" name="Nos chambres" />
   <NavLink path="/spa" name="Nos SPA" />
  <NavLink path="/Hotel" name="Menu" />
   <NavLink path="/Contact" name="Contact" />
    <NavLink path="/Update" name="Mettre à jour" />
      <Link href="/">
          <div className="font-bold text-white lg:w-2/5 md:w-2/12  cursor-pointer">
            Hotely
          </div>
        </Link>

*/