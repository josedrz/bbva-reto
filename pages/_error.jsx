/* Next imports */
import Head from "next/head";
import { useRouter } from "next/router";
export default function Planificación() {
  const router = useRouter();
  return (
    <>
      <Head>
        {/* Basic */}
        <title>Pronto</title>
        <meta name="description" content="Pronto" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="mt-10 flex flex-col items-center">
        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          Pronto estará disponible
        </div>

        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          Gracias por el interés
        </div>

        <button
          className="mt-6 inline-flex items-center rounded-md border border-transparent bg-custom-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-custom-700 focus:outline-none focus:ring-2 focus:ring-custom-500 focus:ring-offset-2"
          onClick={() => router.push("/")}
        >
          Volver
        </button>
      </div>
    </>
  );
}
