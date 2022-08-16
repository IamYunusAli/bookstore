import Input from '../components/input';
import Books from '../components/Book';
import './pages.css';

const Bookpage = () => {
  const bookList = [
    {
      id: 1,
      genere: 'Action',
      title: 'Hunger Games',
      author: 'Suzanne Collins',
      percent: 64,
      chapter: 12,
    },

    {
      id: 2,
      genere: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percent: 8,
      chapter: 2,
    },
    {
      id: 3,
      genere: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percent: 0,
      chapter: 2,
    },
  ];
  return (
    <div className="bookcont">
      {bookList.map((book) => (
        <Books
          key={book.id}
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
