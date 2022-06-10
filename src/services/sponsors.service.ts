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
  {
    name: "Taller Aurelio",
    description:
      "Mecánica automotriz para vehículos a gasolina y diésel, rústicos, de paseo, de carga y otros. \n Sector las guayabitas vía Santa Rita",
    logo: new URL("../assets/images/ta_logo.png", import.meta.url).href,
  },
  {
    name: "Agroabuelos",
    description:
      "Venta de pollitos bebé y alimentos concentrados... sector Santa Isabel en Boconó",
    instagram: "https://www.instagram.com/agroabuelos/",
    logo: new URL("../assets/images/aab_logo.png", import.meta.url).href,
  },
  {
    name: "Lcda. Yerica Chinchilla",
    description:
      "Servicio de contabilidad para su firma personal o su empresa,C.C Apolo Center local # 17",
    logo: new URL("../assets/images/ly_logo.png", import.meta.url).href,
  },
  {
    name: "Las tortas de Are",
    description: "Para pedidos y entregas a domicilio",
    logo: new URL("../assets/images/ltda_logo.png", import.meta.url).href,
    instagram: "https://www.instagram.com/lastortasdeare/",
    whatsapp: "https://wa.link/p4nu1b",
    phone: "+58 414-9745767",
  },
];
