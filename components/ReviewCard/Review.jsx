function Review({name,description,ocupation,image,userImage}) {
    return (
      <div className="flex flex-col p-3 items-center">
      
        <p className="flex items-center text-gray-700 ">{description}</p>
        <div className="flex pt-5 items-center justify-between  w-full">
          <div className="w-full">
            <h1 className=" text-xl font-bold">{name}</h1>
            <p className=" text-gray-500 text-sm">{ocupation}</p>
          </div>
          <div className="w-full flex items-center justify-end">
            <img
              src="https://img.icons8.com/fluency/48/000000/star.png"
              className=" object-cover h-6"
              alt=""
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/star.png"
              className=" object-cover h-6"
              alt=""
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/star.png"
              className=" object-cover h-6"
              alt=""
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/star.png"
              className=" object-cover h-6"
              alt=""
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/star.png"
              className=" object-cover h-6"
              alt=""
            />
          </div>
        </div>
        <div className="pt-6">
          <img
            src={userImage}
            className="h-20 object-cover ring ring-blue-500 rounded-full"
            alt=""
          />
        </div>
      </div>
    );
}

export default Review
