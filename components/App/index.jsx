import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  DocumentArrowUpIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import Location from "../base/Map";
import LocationView from "../base/MapView";
import {
  getFirestore,
  doc,
  onSnapshot,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
  deleteField,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const subNavigation = [
  { name: "Identificación", href: "#", icon: UserCircleIcon, current: true },
  {
    name: "Localización y entorno",
    href: "#",
    icon: MapPinIcon,
    current: false,
  },
  {
    name: "Características del inmueble",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "Características de ejecución",
    href: "#",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
];
const subNavigationView = [
  { name: "Valoración", href: "#", icon: CurrencyDollarIcon, current: true },
  { name: "Identificación", href: "#", icon: UserCircleIcon, current: true },
  {
    name: "Localización y entorno",
    href: "#",
    icon: MapPinIcon,
    current: false,
  },
  {
    name: "Características del inmueble",
    href: "#",
    icon: BuildingOfficeIcon,
    current: false,
  },
  {
    name: "Características de ejecución",
    href: "#",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppView(props) {
  const [resgistros, setRegistros] = useState([]);
  const [resgistrosRE, setRegistrosRE] = useState([]);
  const [viewState, setViewState] = useState("main");
  const [editState, setEditState] = useState({});
  const [nav, setNav] = useState("Identificación");
  const nuevoRegistro = async () => {
    const db = getFirestore();
    const id = doc(collection(db, "registros"));
    const key = id["_key"]["path"]["segments"][1];
    const codigo = Math.random().toString(36).substring(2, 7).toUpperCase();
    const content = {
      key: key,
      id: codigo,
      Banco: "BBVA",
      state: "En proceso",
      lat: -12.0487147,
      lng: -77.0499791,
      departamento: {
        id_ubigeo: "2534",
        nombre_ubigeo: "Amazonas",
        codigo_ubigeo: "01",
        etiqueta_ubigeo: "Amazonas, Perú",
        buscador_ubigeo: "amazonas perú",
        numero_hijos_ubigeo: "7",
        nivel_ubigeo: "1",
        id_padre_ubigeo: "2533",
        init: true,
      },
      provincia: {
        id_ubigeo: "2557",
        nombre_ubigeo: "Bagua",
        codigo_ubigeo: "02",
        etiqueta_ubigeo: "Bagua, Amazonas",
        buscador_ubigeo: "bagua amazonas",
        numero_hijos_ubigeo: "5",
        nivel_ubigeo: "2",
        id_padre_ubigeo: "2534",
        init: true,
      },
      distrito: {
        id_ubigeo: "2559",
        nombre_ubigeo: "Aramango",
        codigo_ubigeo: "02",
        etiqueta_ubigeo: "Aramango, Bagua",
        buscador_ubigeo: "aramango bagua",
        numero_hijos_ubigeo: "0",
        nivel_ubigeo: "3",
        id_padre_ubigeo: "2557",
        init: true,
      },
    };
    try {
      setEditState(content);
      setViewState("edit");
      await setDoc(id, content);
    } catch (error) {
      console.log(error);
    }
  };
  const guardar = async () => {
    const db = getFirestore();
    const id = doc(collection(db, "registros"), editState.key);
    try {
      await updateDoc(id, editState);
    } catch (error) {
      console.log(error);
    }
  };
  const enviar = async () => {
    const db = getFirestore();
    const id = doc(collection(db, "registros"), editState.key);
    try {
      // llama a la API
      await updateDoc(id, {
        ...editState,
        state: "Culminado",
        valuacion: {
          valor: 2000,
          a1: 1000,
          a2: 800,
          a3: 1990,
        },
      });
      setViewState("view");
      setNav("Valoración");
      // muestra vista de ver
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const db = getFirestore();
    const query = collection(db, "registros");
    // Obtén actualizaciones en tiempo real de quotesRef, sin did todos
    onSnapshot(
      query,
      (querySnapshot) => {
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push(doc.data());
        });
        //dt
        setRegistros(userData);
        setRegistrosRE(userData);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const ordenar = (array) => {
    return array.sort((a, b) => {
      if (a.Fecha > b.Fecha) {
        return -1;
      }
      if (a.Fecha > b.Fecha) {
        return 1;
      }
      return 0;
    });
  };
  const culminados = () => {
    return resgistros.filter((item) => item.state === "Culminado").length;
  };
  const pendientes = () => {
    return resgistros.filter((item) => item.state === "En proceso").length;
  };
  const Buscar = (e) => {
    const registrosCopy = [...resgistros];
    const title = e.target.value;
    const registrosFiltrados = filterByTitle(title);
    function filterByTitle(title) {
      return registrosCopy.filter((card) => {
        var newChart = "";
        for (let index = 0; index < title.length; index++) {
          var chart = card.id.charAt(index);
          newChart = newChart + chart;
        }
        const removeAccents = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        };
        return removeAccents(newChart.toLowerCase()).includes(
          title.toLowerCase()
        );
      });
    }
    setRegistrosRE(registrosFiltrados);
  };
  return (
    <div>
      <Disclosure
        as="div"
        className="relative overflow-hidden bg-custom-700 pb-32"
      >
        {({ open }) => (
          <>
            <nav
              className={classNames(
                open ? "bg-custom-900" : "bg-transparent",
                "relative z-10 border-b border-custom-500 border-opacity-25 lg:border-none lg:bg-transparent"
              )}
            >
              <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-custom-800">
                  <div className="flex items-center px-2 lg:px-0">
                    <div className="flex-shrink-0">
                      <svg
                        width="100"
                        height="30"
                        viewBox="0 0 600 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3_7440)">
                          <path
                            d="M432.2 24.4L380.6 122.6C379.5 124.7 376.3 124.7 375.2 122.6L323.6 24.4C323.1 23.4 322.1 22.8 321 22.8H296C294.3 22.8 293.2 24.6 294 26.1L375.3 178.3C376.4 180.4 379.4 180.4 380.6 178.3L461.9 26.1C462.7 24.6 461.6 22.8 459.9 22.8H434.9C433.7 22.8 432.7 23.4 432.2 24.4Z"
                            fill="white"
                          />
                          <path
                            d="M461.5 155.5L513.1 57.3C514.2 55.2 517.4 55.2 518.5 57.3L570.1 155.5C570.6 156.5 571.6 157.1 572.7 157.1H597.7C599.4 157.1 600.5 155.3 599.7 153.8L518.4 1.60002C517.3 -0.499976 514.3 -0.499976 513.1 1.60002L431.8 153.8C431 155.3 432.1 157.1 433.8 157.1H458.8C459.9 157 461 156.4 461.5 155.5Z"
                            fill="white"
                          />
                          <path
                            d="M108.8 95.2C119.6 89.8 126.3 78.0999 126.3 63.7999C126.3 39.2999 107.2 22.7 80.3 22.7H3C1.3 22.7 0 24 0 25.7V176.8C0 178.5 1.3 179.8 3 179.8H77C114 179.8 133.5 163.9 133.5 132.7C133.5 102.3 108.8 95.2 108.8 95.2ZM29 45.5H74.9C91.8 45.5 100.4 52.6999 100.4 66.0999C100.4 79.4999 91.8 86.6999 74.9 86.6999H29C27.4 86.6999 26 85.3999 26 83.6999V48.5C26 46.8 27.3 45.5 29 45.5ZM75.5 157H29C27.3 157 26 155.7 26 154V112.3C26 110.7 27.3 109.3 29 109.3H75.5C97.7 109.3 107.6 115.6 107.6 133.1C107.5 150.8 97.9 157 75.5 157Z"
                            fill="white"
                          />
                          <path
                            d="M267.5 95.2C278.3 89.8 285 78.0999 285 63.7999C285 39.2999 265.9 22.7 239 22.7H161.6C159.9 22.7 158.6 24 158.6 25.7V176.8C158.6 178.5 159.9 179.8 161.6 179.8H235.6C272.6 179.8 292.1 163.9 292.1 132.7C292.2 102.3 267.5 95.2 267.5 95.2ZM187.7 45.5H233.6C250.5 45.5 259.1 52.6999 259.1 66.0999C259.1 79.4999 250.5 86.6999 233.6 86.6999H187.7C186 86.6999 184.7 85.3999 184.7 83.6999V48.5C184.7 46.8 186 45.5 187.7 45.5ZM234.1 157H187.6C186 157 184.6 155.7 184.6 154V112.3C184.6 110.7 185.9 109.3 187.6 109.3H234.1C256.3 109.3 266.2 115.6 266.2 133.1C266.2 150.8 256.5 157 234.1 157Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3_7440">
                            <rect width="600" height="179.8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                      <div className="flex"></div>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="text-white font-bold cursor-pointer mx-4">
                      Equipo
                    </div>
                    <div className="text-white font-bold cursor-pointer mx-4">
                      Algoritmo
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="bg-custom-900 lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3"></div>
              </Disclosure.Panel>
            </nav>
            <div
              aria-hidden="true"
              className={classNames(
                open ? "bottom-0" : "inset-y-0",
                "absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"
              )}
            >
              <div className="absolute inset-0 flex">
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#082247" }}
                />
                <div
                  className="h-full w-1/2"
                  style={{ backgroundColor: "#004481" }}
                />
              </div>
              <div className="relative flex justify-center">
                <svg
                  className="flex-shrink-0"
                  width={1750}
                  height={308}
                  viewBox="0 0 1750 308"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                    fill="#082247"
                  />
                  <path
                    d="M1465.84 308L16.816 0H1750v308h-284.16z"
                    fill="#004481"
                  />
                  <path
                    d="M1733.19 0L284.161 308H0V0h1733.19z"
                    fill="#082247"
                  />
                  <path
                    d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                    fill="#082247"
                  />
                </svg>
              </div>
            </div>
            <header className="relative py-8">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {viewState !== "main" && (
                  <h1 className="text-3xl font-bold tracking-tight text-white flex">
                    <button
                      onClick={() => {
                        setViewState("main");
                        setNav("Identificación");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8 mr-2 mt-px"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                      </svg>
                    </button>
                    {editState.id}
                  </h1>
                )}
              </div>
            </header>
          </>
        )}
      </Disclosure>
      {viewState === "main" && (
        <main className="relative -mt-32">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="py-6 px-4 sm:p-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-4 mb-6">
                  Bienvenido a Evaluator
                </h1>
                <dl className="w-full md:w-2/3 lg:w-1/2 mt-4 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-2 md:divide-y-0 md:divide-x">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-normal text-gray-900 truncate">
                      Culminados
                    </dt>
                    <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                      <div className="truncate flex items-baseline text-2xl font-semibold text-custom-600">
                        {culminados()}
                        <span className="ml-2 text-sm font-medium text-gray-500">
                          de {resgistros.length}
                        </span>
                      </div>
                    </dd>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-normal text-gray-900 truncate">
                      Pendientes
                    </dt>
                    <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                      <div className="truncate flex items-baseline text-2xl font-semibold text-red-600">
                        {pendientes()}
                        <span className="ml-2 text-sm font-medium text-red-400">
                          de {resgistros.length}
                        </span>
                      </div>
                    </dd>
                  </div>
                </dl>
                <div className="w-full md:w-1/2 grid grid-cols-3 gap-2 my-4">
                  <div className="flex-1 min-w-0 col-span-2">
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="search"
                        name="search"
                        className="h-10 boder outline-none focus:ring-custom-500 focus:border-custom-500 block w-full pl-10 text-sm border border-gray-300 rounded-md"
                        placeholder="Nro de expediente"
                        onChange={(e) => Buscar(e)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="h-full truncate focus:outline-none rounded-md border border-transparent bg-custom-600 py-2 px-2 md:px-3 xl:px-4 text-sm font-medium text-white shadow-sm hover:bg-custom-700 focus:ring-2 focus:ring-custom-500 focus:ring-offset-2"
                      onClick={() => nuevoRegistro()}
                    >
                      Nuevo registro
                    </button>
                  </div>
                </div>
                <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg max-h-96 overflow-y-auto containerScroll">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-6"
                        >
                          Nro de expediente
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-xs font-semibold text-gray-900"
                        >
                          Cliente
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-xs font-semibold text-gray-900"
                        >
                          Estado
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-center  text-xs font-semibold text-gray-900"
                        >
                          Fecha de creación
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-center  text-xs font-semibold text-gray-900"
                        >
                          Departamento
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-center text-xs font-semibold text-gray-900"
                        >
                          Provincia
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-center  text-xs font-semibold text-gray-900"
                        >
                          Distrito
                        </th>
                        <th
                          scope="col"
                          className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Más detalle</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {ordenar(resgistrosRE).map((transaction, idx) => (
                        <tr key={transaction.id}>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-900 sm:pl-6 font-medium">
                            {transaction.id}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                            {transaction["Nombres y apellidos"] || "-"}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                            {transaction["state"]}
                          </td>
                          <td className="text-center whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                            {transaction["Fecha"] || "-"}
                          </td>
                          <td className="text-center whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                            {transaction["departamento"].init
                              ? "-"
                              : transaction["departamento"].nombre_ubigeo}
                          </td>
                          <td className="text-center whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                            {transaction["provincia"].init
                              ? "-"
                              : transaction["provincia"].nombre_ubigeo}
                          </td>
                          <td className="text-center  whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                            {transaction["distrito"].init
                              ? "-"
                              : transaction["distrito"].nombre_ubigeo}
                          </td>
                          <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            {transaction["state"] === "En proceso" ? (
                              <button
                                className="text-custom-600 hover:text-custom-900"
                                onClick={() => {
                                  setEditState(transaction);
                                  setViewState("edit");
                                  setNav("Identificación");
                                }}
                              >
                                Editar
                                <span className="sr-only">, {idx}</span>
                              </button>
                            ) : (
                              <button
                                className="text-custom-600 hover:text-custom-900"
                                onClick={() => {
                                  setEditState(transaction);
                                  setViewState("view");
                                  setNav("Valoración");
                                }}
                              >
                                Ver
                                <span className="sr-only">, {idx}</span>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      {viewState === "edit" && (
        <main className="relative -mt-32">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name === nav
                            ? "bg-custom-500 border-custom-200 text-white hover:bg-custom-500"
                            : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                        )}
                        aria-current={item.name === nav ? "page" : undefined}
                        onClick={() => setNav(item.name)}
                      >
                        <item.icon
                          className={classNames(
                            item.name === nav
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </aside>

                <div className="divide-y divide-gray-200 lg:col-span-9">
                  {nav === "Identificación" && (
                    <>
                      {/* S2 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Solicitante
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Banco
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Banco"]}
                              disabled
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Funcionario
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Funcionario"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  Funcionario: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Fecha
                            </label>
                            <input
                              type="date"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Fecha"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  Fecha: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* S3 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Cliente
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Tipo documento
                            </label>
                            <select
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Tipo documento"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Tipo documento"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={editState["Tipo documento"] === "DNI"}
                              >
                                DNI
                              </option>
                              <option
                                selected={editState["Tipo documento"] === "RUC"}
                              >
                                RUC
                              </option>
                              <option
                                selected={
                                  editState["Tipo documento"] === "Pasaporte"
                                }
                              >
                                Pasaporte
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro documento
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Nro documento"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro documento"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nombres y apellidos
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Nombres y apellidos"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nombres y apellidos"]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {nav === "Localización y entorno" && (
                    <>
                      <Location
                        setEditState={setEditState}
                        editState={editState}
                      />
                    </>
                  )}
                  {nav === "Características del inmueble" && (
                    <>
                      {/* S1 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Descripción general
                        </h2>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Categoria del bien
                            </label>
                            <select
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Categoria del bien"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Categoria del bien"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Departamento"
                                }
                              >
                                Departamento
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Vivienda Unifamiliar"
                                }
                              >
                                Vivienda Unifamiliar
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Local Comercial"
                                }
                              >
                                Local Comercial
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Terreno urbano"
                                }
                              >
                                Terreno urbano
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Edificación en construcción (construyo)"
                                }
                              >
                                Edificación en construcción (construyo)
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Edificio comercial"
                                }
                              >
                                Edificio comercial
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] === "Vehículo"
                                }
                              >
                                Vehículo
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Almacén /Taller"
                                }
                              >
                                Almacén /Taller
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] === "Hotel"
                                }
                              >
                                Hotel
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Terreno Rústico (eriazo)"
                                }
                              >
                                Terreno Rústico (eriazo)
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] === "Oficina"
                                }
                              >
                                Oficina
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Maquinaria y/o Equipo"
                                }
                              >
                                Maquinaria y/o Equipo
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Centro comercial"
                                }
                              >
                                Centro comercial
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Muebles y enseres"
                                }
                              >
                                Muebles y enseres
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Industria"
                                }
                              >
                                Industria
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Fundo Agrícola"
                                }
                              >
                                Fundo Agrícola
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Estacionamiento/depósito (U.I.)"
                                }
                              >
                                Estacionamiento/depósito (U.I.)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Piso ocupado
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Piso ocupado"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Piso ocupado"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Área total (m2)
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Área total (m2)"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Área total (m2)"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Área construida (m2)
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Área construida (m2)"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Área construida (m2)"]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* S2 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Construcción
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Posición
                            </label>
                            <select
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Posición"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Posición"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={editState["Posición"] === "Exterior"}
                              >
                                Exterior
                              </option>
                              <option
                                selected={editState["Posición"] === "Interior"}
                              >
                                Interior
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Edad efectiva (Antigüedad)
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Edad efectiva (Antigüedad)"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Edad efectiva (Antigüedad)"]:
                                    e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Estado de conservación
                            </label>
                            <select
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Estado de conservación"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Estado de conservación"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Muy bueno"
                                }
                              >
                                Muy bueno
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Bueno"
                                }
                              >
                                Bueno
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Regular"
                                }
                              >
                                Regular
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] === "Malo"
                                }
                              >
                                Malo
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Muy malo"
                                }
                              >
                                Muy malo
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* S3 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Obras complementarias
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro de estacionamientos
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState[" Nro de estacionamientos"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro de estacionamientos"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro de depositos
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState[" Nro de depositos"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro de depositos"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro de asensores
                            </label>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Nro de asensores"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro de asensores"]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {nav === "Características de ejecución" && (
                    <>
                      {/* S1 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Parámetros
                        </h2>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Método Representado
                            </label>
                            <select
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Método Representado"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Método Representado"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Método Representado"] ===
                                  "Costo o Reposición (DIRECTO)"
                                }
                              >
                                Costo o Reposición (DIRECTO)
                              </option>
                              <option
                                selected={
                                  editState["Método Representado"] ===
                                  "Comparación de mercado (DIRECTO)"
                                }
                              >
                                Comparación de mercado (DIRECTO)
                              </option>
                              <option
                                selected={
                                  editState["Método Representado"] ===
                                  "Renta o capitalización (INDIRECTO)"
                                }
                              >
                                Renta o capitalización (INDIRECTO)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Moneda de la tasación
                            </label>
                            <select
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Moneda de la tasación"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Moneda de la tasación"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Moneda de la tasación"] === "USD"
                                }
                              >
                                USD
                              </option>
                              <option
                                selected={
                                  editState["Moneda de la tasación"] === "PEN"
                                }
                              >
                                PEN
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Buttons */}
                  <div className="flex justify-end py-4 px-4 sm:px-6 pt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-custom-500 focus:ring-offset-2"
                      onClick={() => guardar()}
                    >
                      Guardar
                    </button>
                    <button
                      type="submit"
                      className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-custom-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-custom-800 focus:outline-none focus:ring-2 focus:ring-custom-500 focus:ring-offset-2"
                      onClick={() => enviar()}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      {viewState === "view" && (
        <main className="relative -mt-32">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav className="space-y-1">
                    {subNavigationView.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name === nav
                            ? "bg-custom-500 border-custom-200 text-white hover:bg-custom-500"
                            : "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                        )}
                        aria-current={item.name === nav ? "page" : undefined}
                        onClick={() => setNav(item.name)}
                      >
                        <item.icon
                          className={classNames(
                            item.name === nav
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </aside>

                <div className="divide-y divide-gray-200 lg:col-span-9">
                  {nav === "Valoración" && (
                    <>
                      {/* S2 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Resultado
                        </h2>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                          <div className="bg-gray-100 shadow rounded-lg text-md font-semibold text-center py-8">
                            <div className="text-xs text-gray-500 my-2">Valoración estimada:</div>
                            <div>
                              {editState["valuacion"].valor}{" "}
                              {editState["Moneda de la tasación"]}
                            </div>
                            <div className="text-xs text-gray-500 my-2">Tipo de cambio: 3.94</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {nav === "Identificación" && (
                    <>
                      {/* S2 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Solicitante
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Banco
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Banco"]}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Funcionario
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Funcionario"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  Funcionario: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Fecha
                            </label>
                            <input
                              disabled
                              type="date"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Fecha"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  Fecha: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* S3 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Cliente
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Tipo documento
                            </label>
                            <select
                              disabled
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Tipo documento"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Tipo documento"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={editState["Tipo documento"] === "DNI"}
                              >
                                DNI
                              </option>
                              <option
                                selected={editState["Tipo documento"] === "RUC"}
                              >
                                RUC
                              </option>
                              <option
                                selected={
                                  editState["Tipo documento"] === "Pasaporte"
                                }
                              >
                                Pasaporte
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro documento
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Nro documento"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro documento"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nombres y apellidos
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Nombres y apellidos"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nombres y apellidos"]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {nav === "Localización y entorno" && (
                    <>
                      <LocationView
                        setEditState={setEditState}
                        editState={editState}
                      />
                    </>
                  )}
                  {nav === "Características del inmueble" && (
                    <>
                      {/* S1 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Descripción general
                        </h2>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Categoria del bien
                            </label>
                            <select
                              disabled
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Categoria del bien"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Categoria del bien"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Departamento"
                                }
                              >
                                Departamento
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Vivienda Unifamiliar"
                                }
                              >
                                Vivienda Unifamiliar
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Local Comercial"
                                }
                              >
                                Local Comercial
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Terreno urbano"
                                }
                              >
                                Terreno urbano
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Edificación en construcción (construyo)"
                                }
                              >
                                Edificación en construcción (construyo)
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Edificio comercial"
                                }
                              >
                                Edificio comercial
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] === "Vehículo"
                                }
                              >
                                Vehículo
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Almacén /Taller"
                                }
                              >
                                Almacén /Taller
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] === "Hotel"
                                }
                              >
                                Hotel
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Terreno Rústico (eriazo)"
                                }
                              >
                                Terreno Rústico (eriazo)
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] === "Oficina"
                                }
                              >
                                Oficina
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Maquinaria y/o Equipo"
                                }
                              >
                                Maquinaria y/o Equipo
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Centro comercial"
                                }
                              >
                                Centro comercial
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Muebles y enseres"
                                }
                              >
                                Muebles y enseres
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Industria"
                                }
                              >
                                Industria
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Fundo Agrícola"
                                }
                              >
                                Fundo Agrícola
                              </option>
                              <option
                                selected={
                                  editState["Categoria del bien"] ===
                                  "Estacionamiento/depósito (U.I.)"
                                }
                              >
                                Estacionamiento/depósito (U.I.)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Piso ocupado
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Piso ocupado"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Piso ocupado"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Área total (m2)
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Área total (m2)"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Área total (m2)"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Área construida (m2)
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Área construida (m2)"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Área construida (m2)"]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {/* S2 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Construcción
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Posición
                            </label>
                            <select
                              disabled
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Posición"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Posición"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={editState["Posición"] === "Exterior"}
                              >
                                Exterior
                              </option>
                              <option
                                selected={editState["Posición"] === "Interior"}
                              >
                                Interior
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Edad efectiva (Antigüedad)
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Edad efectiva (Antigüedad)"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Edad efectiva (Antigüedad)"]:
                                    e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Estado de conservación
                            </label>
                            <select
                              disabled
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Estado de conservación"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Estado de conservación"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Muy bueno"
                                }
                              >
                                Muy bueno
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Bueno"
                                }
                              >
                                Bueno
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Regular"
                                }
                              >
                                Regular
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] === "Malo"
                                }
                              >
                                Malo
                              </option>
                              <option
                                selected={
                                  editState["Estado de conservación"] ===
                                  "Muy malo"
                                }
                              >
                                Muy malo
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      {/* S3 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Obras complementarias
                        </h2>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro de estacionamientos
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState[" Nro de estacionamientos"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro de estacionamientos"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro de depositos
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState[" Nro de depositos"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro de depositos"]: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nro de asensores
                            </label>
                            <input
                              disabled
                              type="text"
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Nro de asensores"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Nro de asensores"]: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {nav === "Características de ejecución" && (
                    <>
                      {/* S1 */}
                      <div className="py-6 px-4 sm:p-6">
                        <h2 className="text-md font-medium leading-6 text-gray-900">
                          Parámetros
                        </h2>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Método Representado
                            </label>
                            <select
                              disabled
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Método Representado"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Método Representado"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Método Representado"] ===
                                  "Costo o Reposición (DIRECTO)"
                                }
                              >
                                Costo o Reposición (DIRECTO)
                              </option>
                              <option
                                selected={
                                  editState["Método Representado"] ===
                                  "Comparación de mercado (DIRECTO)"
                                }
                              >
                                Comparación de mercado (DIRECTO)
                              </option>
                              <option
                                selected={
                                  editState["Método Representado"] ===
                                  "Renta o capitalización (INDIRECTO)"
                                }
                              >
                                Renta o capitalización (INDIRECTO)
                              </option>
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Moneda de la tasación
                            </label>
                            <select
                              disabled
                              className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-3 shadow-sm focus:border-custom-500 focus:outline-none focus:ring-custom-500 sm:text-sm"
                              value={editState["Moneda de la tasación"]}
                              onChange={(e) =>
                                setEditState({
                                  ...editState,
                                  ["Moneda de la tasación"]:
                                    e.target.options[e.target.selectedIndex]
                                      .textContent,
                                })
                              }
                            >
                              <option disabled selected></option>
                              <option
                                selected={
                                  editState["Moneda de la tasación"] === "USD"
                                }
                              >
                                USD
                              </option>
                              <option
                                selected={
                                  editState["Moneda de la tasación"] === "PEN"
                                }
                              >
                                PEN
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
