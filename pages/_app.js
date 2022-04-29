import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/customcss.css";
import Layout from "../components/Layouts";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
