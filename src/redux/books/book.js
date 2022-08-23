import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/books/REMOVEBOOK';

export const ADDBOOKS = (book) => ({
  type: ADDBOOK,
  book,
});

export const REMOVEBOOKS = (id) => ({
  type: REMOVEBOOK,
  id,
});

const initState = [
  {
    id: uuidv4(),
    genere: 'Action',
    title: 'Hunger Games',
    author: 'Suzanne Collins',
    percent: 64,
    chapter: 12,
  },

  {
    id: uuidv4(),
    genere: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percent: 8,
    chapter: 2,
  },
  {
    id: uuidv4(),
    genere: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percent: 8,
    chapter: 2,
  },
];

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return [...state].filter((e) => e.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
