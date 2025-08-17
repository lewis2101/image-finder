import { IImageCard } from "@/widgets";
import natureMan from "@/app/assets/images/nature_man.png"
import natureAnimal from "@/app/assets/images/nature_animal.png"
import nature from "@/app/assets/images/nature.png"
import natureFamily from "@/app/assets/images/nature_family.png"
import picture from "@/app/assets/images/picture.png"
import foods from "@/app/assets/images/foods.png"
import builders from "@/app/assets/images/builders.png"
import canyons from "@/app/assets/images/canyons.png";

export const allImages: IImageCard[] = [
    {
        id: 1,
        url: natureMan,
        alt: "nature_man",
        title: "Вдохновение в каждом шаге",
        description: "Наши путешественники находят вдохновение в каждом шаге своего пути.",
        pins: ["Природа", "Люди"],
        amountComment: 1,
        reviewTime: 10,
        createdAt: new Date("2023-10-01T12:00:00Z")
    }, 
    {
        id: 2,
        url: natureAnimal,
        alt: "nature_animal",
        title: "Моменты тишины и покоя",
        description: "В такие моменты наши фотографы ощущают гармонию и умиротворение.",
        pins: ["Природа", "Животные"],
        amountComment: 2,
        reviewTime: 5,
        createdAt: new Date("2023-10-02T12:00:00Z")
    },
    {
        id: 3,
        url: nature,
        alt: "nature",
        title: "Цвета природы в наших руках",
        description: "Наши художники выражают всю красоту окружающего мира через творчество.",
        pins: ["Природа", "Искусство"],
        amountComment: 10,
        reviewTime: 15,
        createdAt: new Date("2023-10-03T12:00:00Z")
    },
    {
        id: 4,
        url: natureFamily,
        alt: "nature_family",
        title: "Объятия, которые говорят больше слов",
        description: "В мире, где слова иногда теряют свою силу, объятия могут стать самым мощным... средством общения.",
        pins: ["Природа", "Искусство"],
        amountComment: 10,
        reviewTime: 2,
        createdAt: new Date("2023-10-02T12:00:00Z")
    },
    {
        id: 5,
        url: picture,
        alt: "picture",
        title: "Вечная гармония",
        description: "Фреска с божествами, словно окно в иной мир, где царит вечная гармония и покой.",
        pins: ["Искусство", "Культура"],
        amountComment: 6,
        reviewTime: 8,
        createdAt: new Date("2023-10-04T12:00:00Z")
    },
    {
        id: 6,
        url: foods,
        alt: "foods",
        title: "Вкус лета",
        description: "Напоминание о том, что простые удовольствия могут приносить огромное счастье.",
        pins: ["Еда", "Приода", "Искусство"],
        amountComment: 2,
        reviewTime: 3,
        createdAt: new Date("2023-10-13T12:00:00Z")
    }, 
    {
        id: 7,
        url: builders,
        alt: "builders",
        title: "Эхо прошлого",
        description: "Старинное здание, укрытое под кронами деревьев, словно хранит в себе эхо прошлого.",
        pins: ["Архитектура", "Люди"],
        amountComment: 0,
        reviewTime: 4,
        createdAt: new Date("2023-11-05T12:00:00Z")
    },
    {
        id: 8,
        url: canyons,
        alt: "canyons",
        title: "Моменты, которые остаются в сердце ",
        description: "Эти мгновения наполняют наши сердца радостью и любовью.",
        pins: ["Природа", "Путешествие", "Животные"],
        amountComment: 2,
        reviewTime: 4,
        createdAt: new Date("2023-11-21T12:00:00Z")
    }
]