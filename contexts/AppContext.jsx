import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const [loginState, setNewLoginState] = useState(false);
  const [loginInfo, setNewLoginInfo] = useState({});
  const [authLoading, setAuthLoading] = useState(true);
  const auth = getAuth();
  useEffect(async () => {
    /**
     * Función para detectar el cambio en el estado de autenticación
     * @param {Object} user
     */
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setNewLoginState(true);
        // create resolver
        if (user.displayName === null) {
          const user = JSON.parse(localStorage.getItem("user"));
          setNewLoginInfo({
            uid: user.uid,
            names: user.displayName.split(":")[0],
            surnames: user.displayName.split(":")[1],
            img: user.photoURL,
          });
          localStorage.removeItem("user");
          setAuthLoading(false);
        } else {
          setNewLoginInfo({
            uid: user.uid,
            names: user.displayName.split(":")[0],
            surnames: user.displayName.split(":")[1],
            img: user.photoURL,
          });
          setAuthLoading(false);
        }
      } else {
        setNewLoginInfo({});
        setNewLoginState(false);
        setAuthLoading(false);
      }
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        authLoading,
        setAuthLoading,
        loginState,
        setNewLoginState,
        loginInfo,
        setNewLoginInfo,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
