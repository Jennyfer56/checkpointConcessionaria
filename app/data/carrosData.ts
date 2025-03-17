export type Carro = {
  id: number;
  modelo: string;
  foto: string;
  ano: number;
  preco: number;
  especificacoes: string;
};

export const carrosData: Carro[] = [
  {
    id: 1,
    modelo: "Mini Cooper",
    foto: "/img/Mini-Cooper.jpg",
    ano: 2023,
    preco: 150000,
    especificacoes: "O MINI Cooper S de 3 portas ganha a série especial Resolute Edition na Europa. O hatchback esportivo recebe detalhes de estilo como molduras de faróis, grade e faixas do capô em tom bronze, enquanto teto e retrovisores vêm em preto ou branco.",
  },
  {
    id: 2,
    modelo: "Mercedes GLE",
    foto: "/img/mercedes-gle.jpg",
    ano: 2016,
    preco: 475000,
    especificacoes: "O motor do carro é biturbo, V6 de 3.0 litros, com 367cv de potência e garante uma aceleração de 0 a 100 km/h em 5,7 segundos",
  },
  {
    id: 3,
    modelo: "Mitsubishi Eclipse Cross",
    foto: "/img/Mitsubishi-Eclipse-Cross.jpg",
    ano: 2021,
    preco: 250000,
    especificacoes: " O motor é o 1.5 Turbo de quatro cilindros movido apenas a gasolina com injeção direta e indireta de combustível. São 165 cavalos de potência a 5.500 rpm e torque de 25,5 kgfm entre 2.000 e 3.500 rpm.",
  },
];