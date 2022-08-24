import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { REMOVEBOOKS } from '../redux/books/book';
import './components.css';

const Books = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  const removebook = () => {
    dispatch(REMOVEBOOKS(id));
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="desc-box">
            <div className="desc">
              <p>{category}</p>
              <p className="book-title">{title}</p>
              <p className="book-author">{author}</p>
            </div>

            <div className="desc-option">
              <ul className="list-unstyled">
                <button type="button"><li>Comments</li></button>
                <div className="detail-divider" />
                <button type="button" onClick={removebook}><li>Remove</li></button>
                <div className="detail-divider" />
                <button type="button"><li>Edit</li></button>
              </ul>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-icon">
              <AiOutlineLoading3Quarters />
            </div>
            <div className="percent-info">
              <p className="progress-value">
                18
                %
              </p>
              <p className="progress-completed">Completed</p>
            </div>
          </div>
          <div className="progress-divider" />
          <div className="chapter-info">
            <div>
              <p>CURRENT CHAPTER</p>
              <p>
                Chapter
                12
              </p>
            </div>
            <button className="buttons" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
