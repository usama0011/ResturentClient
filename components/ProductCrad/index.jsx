import NavLink from "../NavLink";
import PrimaryButton from "../PrimaryButton";

export default function ProductCard({title, imgUrl}) {
    return (
      <div className="w-full max-w-xs space-y-4 flex flex-col items-center">
        <img
          src={imgUrl}
          className="w-full hover:brightness-75  rounded-lg   transition-all duration-300 h-56 object-cover"
        />
        <h5 className="text-gray-700">{title}</h5>

        <a href="/chambre">
          <PrimaryButton>Voir</PrimaryButton>
        </a>
      </div>
    );
}
