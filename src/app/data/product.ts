import { IProduct } from "../types";

export const products: IProduct[] = [
    {
     id: 1,
     title: "MacBook Pro 16",
     description: "Мощный ноутбук с процессором M2 Pro, 32GB RAM, 1TB SSD. Идеально подходит для профессиональной работы с графикой, видео и разработки ПО. Потрясающий Liquid Retina XDR дисплей и до 22 часов автономной работы.",
     price: 2499,
     image: "/images/laptop.jpg",
     specs: [
      "Процессор M2 Pro",
      "32GB unified memory",
      "1TB SSD",
      "16-inch Liquid Retina XDR display",
      "До 22 часов работы от батареи"
     ],
     category: "Ноутбуки",
     inStock: true
    },
    {
     id: 2,
     title: "iPhone 15 Pro Max",
     description: "Флагманский смартфон с революционной системой камер, процессором A17 Pro и титановым корпусом. Профессиональная камера 48MP с поддержкой ProRAW, супербыстрая зарядка и передовые функции безопасности.",
     price: 1299,
     image: "/images/phone.jpg",
     specs: [
      "Процессор A17 Pro",
      "6.7″ Super Retina XDR дисплей",
      "Система камер Pro 48MP",
      "Титановый корпус",
      "iOS 17"
     ],
     category: "Смартфоны",
     inStock: true
    },
    {
     id: 3,
     title: "Apple Watch Series 9",
     description: "Передовые умные часы с процессором S9, Always-On Retina дисплеем и расширенным набором функций для здоровья. Мониторинг ЭКГ, уровня кислорода в крови и качества сна. Водонепроницаемость и GPS.",
     price: 499,
     image: "/images/watch.jpg",
     specs: [
      "Процессор S9",
      "Always-On Retina дисплей",
      "Мониторинг здоровья",
      "GPS + Cellular",
      "Водонепроницаемость до 50м"
     ],
     category: "Часы",
     inStock: false
    },
    {
     id: 4,
     title: "iPad Pro 12.9",
     description: "Профессиональный планшет с процессором M2, потрясающим mini-LED дисплеем и поддержкой Apple Pencil 2-го поколения. Идеален для творчества, работы и развлечений.",
     price: 1099,
     image: "/images/laptop_2.jpg",
     specs: [
      "Процессор M2",
      "12.9-inch mini-LED дисплей",
      "Поддержка Apple Pencil 2",
      "Thunderbolt / USB 4",
      "Face ID"
     ],
     category: "Планшеты",
     inStock: true
    },
    {
        id: 5,
        title: "Huawei W20",
        description: "Профессиональный телефон для занятых людей. Идеален для творчества, работы и развлечений.",
        price: 1500,
        image: "/images/phone2.avif",
        specs: [
         "Snapdragon 888",
         "12.9-inch mini-LED дисплей",
         "Поддержка Huawei Pencil 2",
         "Thunderbolt / USB 3",
         "Face ID",
        "5G"
        ],
        category: "Смартфоны",
        inStock: true
       }
   ];

