import Header from "../components/Header";
import Room from "../components/Room";
import Head from "next/head";
const rooms = [
    {
        name: "Chambre Confort",
        price: "$150",
        imgUrl: "/images/image2.jpg"
    },
    {
        name: "Chambre de luxe",
        price: "$200",
        imgUrl: "/images/image3.jpg"
    },
    {
        name: "Chambre supérieure",
        price: "$150",
        imgUrl: "/images/image4.jpg"
    }
]
export default function Chambre() {
  return (
    <div className="my-20 mt-28">
              <Head>
        <title>Nos Chambre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header >Nos Chambre</Header>
        <div className="space-y-20  mt-20">
        {
            rooms.map((room, i) => <Room {...room} key={i} />)
        }
        </div>
    </div>
  );
}
