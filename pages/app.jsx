/* Next imports */
import Head from "next/head";
import AppView from "components/App";
export default function App() {
  return (
    <>
      <Head>
        {/* Basic */}
        <title>App</title>
        <meta
          name="description"
          content="Reto de valorizaciones - BBVA > App"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <AppView />
    </>
  );
}