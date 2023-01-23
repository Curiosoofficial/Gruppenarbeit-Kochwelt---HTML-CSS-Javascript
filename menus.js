"use strict";

const menus = {
  bolo: {
    title: "Spaghetti Bolognese",
    image: "img/bolo.jpg",
    creator: {
      name: "fabian",
      image: "img/profile.png",
    },
    additionalInfos: {
      duration: "15 Min.",
      difficulty: "normal",
      create: "20.11.2022",
    },
    preparation: {
      durationTime: "ca. 15 Minuten",
      durationTotalTime: "Gesamtzeit ca. 15 Minuten",
      preparationText: `
                      Zwiebel und Knoblauch schälen, fein hacken. Rüebli und Sellerie
                      schälen, in Würfeli schneiden. 1 EL Öl in einer beschichteten
                      Bratpfanne warm werden lassen. Zwiebel und Knoblauch andämpfen. Rüebli
                      und Sellerie kurz mitdämpfen. Herausnehmen, beiseite stellen.
                      Restliches Öl in derselben Pfanne heiss werden lassen. Fleisch ca. 5
                      Min. anbraten, Tomatenpüree beigeben, kurz mitbraten. Hitze
                      reduzieren, Wein dazugiessen und vollständig einkochen. Tomaten in
                      Würfeli schneiden, mit Rosmarin, Zucker, Kräutermischung und dem
                      beiseite gestellten Gemüse beigeben, zugedeckt unter gelegentlichem
                      Rühren bei kleiner Hitze ca. 20 Min. köcheln. Rosmarin entfernen,
                      würzen.
      `,
    },
    portions: 4,
    ingredients: [
      {
        amount: 1,
        unit: "",
        name: "Zwiebel(n)",
      },
      {
        amount: 2,
        unit: "",
        name: "Knoblauchzehe(n)",
      },
      {
        amount: 1,
        unit: "",
        name: "Möhre(n)",
      },
      {
        amount: 500,
        unit: "g",
        name: "Rinderhackfleisch oder Tartar",
      },
      {
        amount: 1,
        unit: "Prise",
        name: "Salz und Pfeffer",
      },
      {
        amount: 200,
        unit: "ml",
        name: "Gemüsebrühe (Instant)",
      },
      {
        amount: 70,
        unit: "g",
        name: "Tomatenmark",
      },
      {
        amount: 1,
        unit: "TL",
        name: "Oregano",
      },
      {
        amount: 400,
        unit: "g",
        name: "Tomaten, stückige, mit Kräutern, z. B. aus dem Tetrapack",
      },
      {
        amount: 2,
        unit: "EL",
        name: "Tomatenketchup",
      },
      {
        amount: 500,
        unit: "g",
        name: "Spaghetti",
      },
    ],
  },

  rindergulasch: {
    title: "Rindergulasch",
    image: "img/header-gulasch.jpg",
    creator: {
      name: "Christoph Haase",
      image: "img/christoph-haase.jpg",
    },
    additionalInfos: {
      duration: "20 Min.",
      difficulty: "normal",
      create: "20.11.2022",
    },
    preparation: {
      durationTime: "ca. 15 Minuten",
      durationTotalTime: "Gesamtzeit ca. 15 Minuten",
      preparationText: `
      In etwas Butterschmalz das Rindergulasch scharf anbraten. Nachdem es rundum angebraten ist, Zwiebeln, Knoblauch und die in Scheiben geschnittenen Karotten beifügen. Danach Tomatenmark zugeben und ca. 3 Minuten köcheln (Hitze etwas reduzieren). Dann mit dem Rotwein ablöschen und anschließend die Rinderbrühe und die Gemüsebrühe zugeben und mit Salz, Pfeffer und Paprikapulver würzen. Zugedeckt bei geringer Hitze ca. 1-1,5 Stunden schmoren. Zum Schluss sollte die Soße noch mit kalter Butter oder Saucenbinder angedickt werden.
      `,
    },
    portions: 4,
    ingredients: [
      {
        amount: 500,
        unit: "g",
        name: "Rindergulasch",
      },
      {
        amount: 5,
        unit: "g",
        name: "Butterschmalz",
      },
      {
        amount: 2,
        unit: "",
        name: "große Zwiebel(n)",
      },
      {
        amount: 2,
        unit: "",
        name: "Karotten",
      },
      {
        amount: 1,
        unit: "",
        name: "Zehe(n) Knoblauch",
      },
      {
        amount: 2,
        unit: "EL",
        name: "Tomatenmark",
      },
      {
        amount: 200,
        unit: "ml",
        name: "Rinderbrühe",
      },
      {
        amount: 300,
        unit: "ml",
        name: "Gemüsebrühe",
      },
      {
        amount: 200,
        unit: "ml",
        name: "Rotwein",
      },
      // {
      //   amount: 0,
      //   unit: "etwas",
      //   name: "Salz und Pfeffer",
      // },
      // {
      //   amount: 0,
      //   unit: "etwas",
      //   name: "Paprikapulver",
      // },
    ],
  },

  tiramisu: {
    title: "Tiramisu",
    image: "img/italian-food-2157246%20(1).jpg",
    creator: {
      name: "Luka Stefanovic",
      image: "img/79371659_907265546335420_2464979783004784561_n.jpg",
    },
    additionalInfos: {
      duration: "150 Min.",
      difficulty: "simple",
      create: "17.11.2022",
    },
    preparation: {
      durationTime: "ca. 30 Minuten",
      durationTotalTime: "Gesamtzeit ca. 3-5h Stunden",
      preparationText: `
      Eigelb, und Puderzucker weiß-schaumig schlagen. Amaretto unterrühren. Mascarpone vorsichtig unterrühren. Nicht mit dem Mixer, sonst wird die Masse flüssig. Lieber einen großen Schneebesen oder Kochlöffel benutzen. Das Eiweiß zu steifem Schnee schlagen und unterheben. Löffelbiskuits kurz in kalten Kaffee tunken und auf Küchenpapier etwas abtropfen lassen. Eine Lage Creme in eine Form geben, darauf eine Lage Biskuits usw. 2 – 4 Stunden (am besten sogar über Nacht) kalt stellen, kurz vor dem Servieren mit Kakaopulver bestreuen. Ist wirklich so gut wie beim Italiener!
      `,
    },
    portions: 4,
    ingredients: [
      {
        amount: 125,
        unit: "g",
        name: "Mascarpone",
      },
      {
        amount: 25,
        unit: "g",
        name: "Puderzucker",
      },
      {
        amount: 50,
        unit: "g",
        name: "Löffelbiskuits",
      },
      {
        amount: 1,
        unit: "",
        name: "Eigelb",
      },
      {
        amount: 0.5,
        unit: "",
        name: "Eiweiss",
      },
      {
        amount: 0.75,
        unit: "Tassen",
        name: "Kaffee",
      },
      {
        amount: 0.5,
        unit: "EL",
        name: "Amaretto",
      },
    ],
  },
};
