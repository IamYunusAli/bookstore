import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Input from '../components/input';
import Books from '../components/Book';
import { fetchBooks } from '../redux/books/book';
import './pages.css';

const Bookpage = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div className="bookcont">
      {bookList.map((book) => (
        <Books
          key={book[0]}
          id={book[0]}
          category={book[1][0].category}
          title={book[1][0].title}
          author={book[1][0].author}
        />
      ))}

      <Input />
    </div>
  );
};

export default Bookpage;
