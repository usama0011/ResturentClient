import PrimaryButton from "../PrimaryButton";

export default function MenuCard({ name,description, price, imgUrl }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-4">
      <img src={imgUrl} className="w-full rounded-lg hover:brightness-75 transition duration-300 cursor-pointer max-w-sm h-80 object-cover" />
      <div className="">
        <h2 className="text-lg font-semibold ">{name}</h2>
        <p className="w-full max-w-xl text-gray-700 mt-2">{description}</p>
        <div className="flex justify-between  items-center mt-20 lg:mt-40 md:mt-40">
          <h1 className="font-semibold text-2xl text-primary-color">{price}</h1>
          <PrimaryButton>Show More</PrimaryButton>
        </div>
      
      </div>

    </div>
  );
}
