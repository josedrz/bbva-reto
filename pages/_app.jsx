import { initializeApp } from "firebase/app";
import { AppProvider } from "contexts/AppContext";
import "styles/custom.css";

function MyApp({ Component, pageProps }) {
  /**
   * Tailwind CSS SSR resolver
   */
  if (process.env.NODE_ENV !== "production") {
    import("../styles/globals.css");
  }
  /**
   * Init firebaseConfig
   */
  const firebaseConfig = {
    apiKey: "AIzaSyAfW9cJGuzky_v8zWjWE-BkVtsh-nWFmJ4",
    authDomain: "bbva-reto.firebaseapp.com",
    projectId: "bbva-reto",
    storageBucket: "bbva-reto.appspot.com",
    messagingSenderId: "20973843587",
    appId: "1:20973843587:web:9250d74952ec42007617b6",
    measurementId: "G-WRF3VMXC1K",
  };
  const app = initializeApp(firebaseConfig);
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
