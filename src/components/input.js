import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { ADDBOOKS } from '../redux/books/book';
import './components.css';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const Addboooks = (element) => {
    element.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
    };
    if (title.length !== 0 && author.length !== 0) {
      dispatch(ADDBOOKS(book));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="inputform">
      <div className="form-divider" />
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={Addboooks} className="form">
        <input
          onChange={(element) => setTitle(element.target.value)}
          value={title}
          className="input titleinput"
          placeholder="Book Title"
          required
        />
        <input
          onChange={(element) => setAuthor(element.target.value)}
          value={author}
          className="input titleinput"
          placeholder="Book author"
          required
        />
        <button type="submit" className="buttons addbook"> Add Book</button>
      </form>
    </div>
  );
};

export default Input;
