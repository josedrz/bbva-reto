/* Next imports */
import Head from "next/head";
// import HomeView from "components/Home";
export default function Home() {
  return (
    <>
      <Head>
        {/* Basic */}
        <title>Reto BBVA</title>
        <meta
          name="description"
          content="Reto de valorizaciones - BBVA"
        />
        <link rel="icon" href="/favicon.svg" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Reto de valorizaciones - BBVA"
        />
        <meta name="twitter:title" content="Portal de Reto BBVA" />
        <meta name="twitter:site" content="@BBVA" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:creator" content="@BBVA" />
        {/* Fb, Insta, Whatsapp, Pinterest */}
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portal de Reto BBVA" />
        <meta
          property="og:description"
          content="Reto de valorizaciones - BBVA"
        />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Reto BBVA" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
      </Head>
      {/* <HomeView /> */}
      <>Landing</>
    </>
  );
}