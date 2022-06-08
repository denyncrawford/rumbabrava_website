import { ISponsor } from "../types";

export const sponsors: ISponsor[] = [
  {
    name: "Decorauto Boconó C.A.",
    description: "Carretera nacional, sector Santa Isabel, Boconó",
    phone: "+58 272 6522859",
    logo: new URL("../assets/images/db_logo.png", import.meta.url).href,
  },
  {
    name: "Agroinsumos El Campo",
    description:
      "Todo para el agricultor . carretera nacional sector La Milla, Boconó",
    logo: new URL("../assets/images/elcampo_logo.png", import.meta.url).href,
  },
  {
    name: "1563 Music Klan",
    description: "Ameniza tu evento con el sonido profesional",
    phone: "+58 414-7257273",
    whatsapp: "https://wa.link/6bhfav",
    logo: new URL("../assets/images/mk_logo.png", import.meta.url).href,
  },
  {
    name: "Junior's Electronics",
    description:
      "Servicio técnico, venta de teléfonos y accesorios... calle Páez entre Av Miranda y 5 de Julio 📱",
    logo: new URL("../assets/images/je_logo.png", import.meta.url).href,
  },
];