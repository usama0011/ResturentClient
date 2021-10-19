// import "tailwindcss/tailwind.css";
import "../index.css";
import 'swiper/css/bundle';
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
