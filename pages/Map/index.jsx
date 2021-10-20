import Map from "../../components/MapExample/Map";
import Room from '../../components/Room';
import Header from "../../components/Header";
import Head from "next/head";
function index() {
    const rooms = [
      {
        name: "Chambre Confort",
        price: "$150",
        imgUrl: "/images/image2.jpg",
      },
      {
        name: "Chambre de luxe",
        price: "$200",
        imgUrl: "/images/image3.jpg",
      },
      {
        name: "Chambre supérieure",
        price: "$150",
        imgUrl: "/images/image4.jpg",
      },
    ];
    return (
      <div className="h-full">
        {/* to side of the linkss */}
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-3 lg:grid-cols-2   mt-36 relative ">
          <div>
            <div className="">
              <Head>
                <title>Map</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
            
              <div className="space-y-20">
                {rooms.map((room, i) => (
                  <Room {...room} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="px-3 md:px-8 h-full relative  mb-16">
            <div className="container mx-auto h-full max-w-full">
              <div className="grid grid-cols-1 px-4 mx-5 md:mx-0  h-[550px]">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default index
