import PrimaryButton from "../PrimaryButton";

export default function ProductCard({title, imgUrl}) {
    return (
        <div className="w-full max-w-xs space-y-4 flex flex-col items-center">
            <img src={imgUrl} className="w-full hover:brightness-75 transition duration-200 h-56 object-cover" />
            <h5>{title}</h5>
            <PrimaryButton>Voir</PrimaryButton>
        </div>
    )
}
