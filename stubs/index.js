const authors = [
  {
    id: 1,
    name: "Михаил Булгаков",
    booksIds: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name: "Николай Гоголь",
    booksIds: [7, 8, 9, 10, 11, 12],
  },
  {
    id: 3,
    name: "Фёдор Достоевский",
    booksIds: [13, 14, 15, 16, 17, 18],
  },
];

const books = [
  {
    id: 1,
    authorId: 1,
    year: 1940,
    title: "Мастер и Маргарита",
    rating: 7.99,
  },
  {
    id: 2,
    authorId: 1,
    year: 1968,
    title: "Собачье сердце",
    rating: 7.98,
  },
  {
    id: 3,
    authorId: 1,
    year: 1927,
    title: "Морфий",
    rating: 7.96,
  },
  {
    id: 4,
    authorId: 1,
    year: 1926,
    title: "Записки юного врача",
    rating: 7.95,
  },
  {
    id: 5,
    authorId: 1,
    year: 1926,
    title: "Дни Турбиных",
    rating: 7.81,
  },
  {
    id: 6,
    authorId: 1,
    year: 1965,
    title: "Иван Васильевич",
    rating: 7.77,
  },
  {
    id: 7,
    authorId: 2,
    year: null,
    title: "Вечера на хуторе близ Диканьки",
    rating: 7.93,
  },
  {
    id: 8,
    authorId: 2,
    year: 1832,
    title: "Ночь перед Рождеством",
    rating: 7.93,
  },
  {
    id: 9,
    authorId: 2,
    year: 1835,
    title: "Записки сумасшедшего",
    rating: 7.93,
  },
  {
    id: 10,
    authorId: 2,
    year: 1835,
    title: "Портрет",
    rating: 7.79,
  },
  {
    id: 11,
    authorId: 2,
    year: null,
    title: "Миргород",
    rating: 7.7,
  },
  {
    id: 12,
    authorId: 2,
    year: 1886,
    title: "Из поэмы «Россия под игом татар»",
    rating: 7.66,
  },
  {
    id: 13,
    authorId: 3,
    year: 1866,
    title: "Преступление и наказание",
    rating: 7.99,
  },
  {
    id: 14,
    authorId: 3,
    year: 1869,
    title: "Идиот",
    rating: 7.97,
  },
  {
    id: 15,
    authorId: 3,
    year: 1880,
    title: "Братья Карамазовы",
    rating: 7.96,
  },
  {
    id: 16,
    authorId: 3,
    year: 1861,
    title: "Униженные и оскорбленные",
    rating: 7.94,
  },
  {
    id: 17,
    authorId: 3,
    year: 1872,
    title: "Бесы",
    rating: 7.93,
  },
  {
    id: 18,
    authorId: 3,
    year: 1848,
    title: "Белые ночи",
    rating: 7.91,
  },
];

module.exports = { books, authors };
