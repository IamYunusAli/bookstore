import { useSelector } from 'react-redux/es/exports';
import Input from '../components/input';
import Books from '../components/Book';
import './pages.css';

const Bookpage = () => {
  const bookList = useSelector((state) => state.books);
  return (
    <div className="bookcont">
      {bookList.map((book) => (
        <Books
          key={book.id}
          id={book.id}
          genere={book.genere}
          title={book.title}
          author={book.author}
          percent={book.percent}
          chapter={book.chapter}
        />
      ))}

      <Input />
    </div>
  );
};

export default Bookpage;
