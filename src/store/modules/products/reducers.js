import arma1 from "../../../assets/img/1.png";
import arma2 from "../../../assets/img/2.webp";
import arma3 from "../../../assets/img/3.png";
import arma4 from "../../../assets/img/4.png";
import arma5 from "../../../assets/img/5.png";
import arma6 from "../../../assets/img/6.png";
import arma7 from "../../../assets/img/7.png";
import arma8 from "../../../assets/img/8.png";
import arma9 from "../../../assets/img/9.webp";

const initialState = [
  {
    id: 1,
    name: "Rifle de assalto",
    description:
      "Arma preferida de Master Chief, e não é a toa, esse fuzil é devastador, com 32 balas no pente esta é uma arma de médio alcance.",
    price: 3570,
    img: arma1,
  },
  {
    id: 2,
    name: "Saw",
    description:
      "A metralhadora mais forte dos Halos, letal e rara, apenas não é mais forte que as torretas.",
    price: 5230,
    img: arma2,
  },
  {
    id: 3,
    name: "Submetralhadora",
    description:
      "Com 60 balas no pente, danos razoáveis e distancia de tiros baixas.",
    price: 4510,
    img: arma3,
  },
  {
    id: 4,
    name: "Magnum",
    description:
      "A poderosíssima Magnum, cruel, de aparência imponente e um tanto versátil, esta pistola é muito adorada por Master Chief que a usa muito.",
    price: 1890,
    img: arma4,
  },
  {
    id: 5,
    name: "Rifle de batalha",
    description:
      "Ótima arma que dispara em rajadas e tem um ótimo alcance, sendo apenas um pouco mais lenta para atirar do que sua rival, a DMR.",
    price: 3120,
    img: arma5,
  },
  {
    id: 6,
    name: "DMR",
    description:
      "Semi-automática, um dano bom, é rápida para atirar  e tem um alcance excelente.",
    price: 2320,
    img: arma6,
  },
  {
    id: 7,
    name: "Rifle de precisão",
    description:
      "Uma arma que mata com um só tiro, morte instantânea, seu alcance e precisão são impecáveis.",
    price: 4865,
    img: arma7,
  },
  {
    id: 8,
    name: "Canhão elétrico",
    description:
      "Uma fusão elétrica que forma um raio devastador.Seu alcance e mira são razoáveis, porem a destruição é garantida.",
    price: 5150,
    img: arma8,
  },
  {
    id: 9,
    name: "Espingarda",
    description:
      "Perfeita contra os Floods, afinal isto é uma Shotgun, e os Floods são como zumbis.",
    price: 2500,
    img: arma9,
  },
];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
