import Rick from "../assets/proyects/rickandmorty1.png";
import Rick2 from "../assets/proyects/rickandmorty2.png";
import Rick3 from "../assets/proyects/rickandmorty3.png";
import Pokemon1 from "../assets/proyects/pokemon1.png";
import Pokemon2 from "../assets/proyects/pokemon2.png";
import Pokemon3 from "../assets/proyects/pokemon3.png";
import Pokemon4 from "../assets/proyects/pokemon4.png";
export const proyects = [
  {
    id: 1,
    title: "Rick and Morty",
    subtitle:
      "Consumiendo un API y recreando un buscador de la serie Rick and Morty",
    urlSite: "https://rickandmortiapireact.netlify.app/",
    urlRepo: "https://github.com/jeancarlos324/RickAndMortyAPI/",
    description:
      "Consumiendo una API de la conocida serie de 'Rick and Morty' y construyendo un interfaz de consulta de los universos de la serie. Mostrando a cada uno de los habitantes pertenecientes a sus respectivos universos. Desarrollado con JAVASCRIPT, usando REACTJS y estilizado con TAILWIND",
    images: [
      { id: 1, image: Rick },
      { id: 2, image: Rick2 },
      { id: 3, image: Rick3 },
    ],
    technologies: [
      {
        id: 1,
        title: "React JS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        id: 2,
        title: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        id: 3,
        title: "Taildwind",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
      {
        id: 4,
        title: "Framer Motion",
        image:
          "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
      },
    ],
    duration: "03 a 05 horas aprox",
  },
  {
    id: 2,
    title: "Pokedex",
    subtitle: "Recreando un Pokedex consumiendo un API y usando enrutadores",
    urlSite: "https://pokedexapipoke.netlify.app/",
    urlRepo: "https://github.com/jeancarlos324/pokeAPI",
    description:
      "Recreando un POKEDEX con la información de todos los pokemones, visualizando sus estadísticas y habilidades de cada uno. Tambien cuenta con un FILTRO por especie y un buscador en TIEMPO REAL para pokemones especificos. El proyecto se Realizo con JAVASCRIPT, usando REACTJS a su vez enrutado mediante REACT ROUTE, manejo de variables globales con REDUX y estilizado con TAILWIND y FRAMER MOTION.  ",
    images: [
      { id: 1, image: Pokemon1 },
      { id: 2, image: Pokemon2 },
      { id: 3, image: Pokemon3 },
      { id: 4, image: Pokemon4 },
    ],
    technologies: [
      {
        id: 1,
        title: "React JS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      },
      {
        id: 2,
        title: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        id: 5,
        title: "Redux",
        image:
          "https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png",
      },
      {
        id: 3,
        title: "Taildwind",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
      {
        id: 4,
        title: "Framer Motion",
        image:
          "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
      },

      {
        id: 6,
        title: "React Route",
        image:
          "https://cdn.freebiesupply.com/logos/thumbs/2x/react-router-logo.png",
      },
    ],
    duration: "10 a 12 horas aprox",
  },
  { id: 3, title: "aea", subtitle: "aweaeae" },
  { id: 4, title: "aea", subtitle: "aweaeae" },
];
