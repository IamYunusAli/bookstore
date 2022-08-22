const ADDBOOK = 'bookstore/book/ADDBOOK';
const REMOVEBOOK = 'bookstore/book/REMOVEBOOK';

export const ADDBOOKS = (book) => ({
  type: ADDBOOK,
  book,
});

export const REMOVEBOOKS = (id) => ({
  type: REMOVEBOOK,
  id,
});

const bookReducer = (state = [], action) => {
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
