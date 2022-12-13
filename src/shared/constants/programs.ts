import { KrakenScreen } from "renderer/screens/Kraken";
import { DigitalOceanScreen } from "../../renderer/screens";


export const programs = [
  {
    id: 1,
    name: "Digital Ocean",
    path: "/digitalOcean",
    component: DigitalOceanScreen,
  },
  {
    id: 2,
    name: "Kraken",
    path: "/kraken",
    component: KrakenScreen,
  },
]
