import { Saint } from "@/models/saint.js";

const SaintsDB: Record<string, Saint> = {
  "anthony-of-the-desert": {
    id: "anthony-of-the-desert",
    name: "Anthony of the Desert",
    color: "#e9d78c",
    image:
      "https://d14f1v6bh52agh.cloudfront.net/kC3MCfZMV9XpWZ2H9E0jl3sV0_s=/fit-in/1400xorig/uploads/hgDXihJhEQstj00trgxrBOdyuHUJDQRmbKcms5rw.jpeg",
    prayer: [
      "Picture the desert before you.",
      "The sun is hot. The air is dry.",
      "You are completely alone in total solitude.",
    ],
  },
  "ignatius-of-loyola": {
    id: "ignatius-of-loyola",
    name: "Ignatius of Loyola",
    color: "#e9d78c",
    image:
      "https://www.catholicartandjewelry.com/cdn/shop/files/5ed6d4a8-a276-5c09-ab0c-e14d2a18d873.jpg?v=1693713643",
    prayer: [],
  },
  "teresa-of-avila": {
    id: "teresa-of-avila",
    name: "Teresa of Avila",
    color: "#4ade80",
    image: "https://www.myss.com/wp-content/uploads/2020/09/st-teresa.png",
    prayer: [],
  },
  "francis-of-assisi": {
    id: "francis-of-assisi",
    name: "Francis of Assisi",
    color: "#a93535",
    image:
      "https://s3.amazonaws.com/cdn.monasteryicons.com/images/popup/st-francis-icon-411.jpg",
    prayer: [],
  },
};

export const getAllSaints = (): Saint[] => {
  return Object.values(SaintsDB);
};
