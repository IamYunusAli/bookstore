const CHECKER = 'bookstore/book/CHECKER';

export const CHECK = () => (
  {
    type: CHECKER,
  });

const catagoryReducer = (state = '', action) => {
  switch (action.type) {
    case CHECKER:
      return 'UNDER DEVELOPMENT';
    default:
      return state;
  }
};

export default catagoryReducer;
