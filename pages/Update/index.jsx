import PrimaryButton from "../../components/PrimaryButton";

function index() {
    return (
      <div className=" w-full">
        <div className="flex flex-col  mx-auto max-w-3xl items-center justify-center w-full">
          <h1 className=" pt-10 font-bold text-2xl">Titre de la page</h1>
          <div className=" w-full">
            <div className="flex-col mx-6   flex ">
              <label className="pt-10 font-semibold " htmlFor="name">
                Titre
              </label>
              <input
                type="text"
                className=" px-2 py-2 mt-2 mb-10 border-gray-300 border outline-none"
                placeholder="Titre"
              />
              <label className="pt-10 font-semibold " htmlFor="name">
                Description
              </label>
              <textarea
                name=""
                className="border mt-2 outline-none p-2 border-gray-300"
                placeholder="Description.."
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        <div className="w-full flex ml-10 mt-10">
            <PrimaryButton>Envoyer</PrimaryButton>
        </div>
        </div>
      </div>
    );
}

export default index
