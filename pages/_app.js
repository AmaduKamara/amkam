// Global styles
import "../styles/globals.css";
// Tailwind css inport
import "tailwindcss/tailwind.css";
import Layout from "../styles/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
