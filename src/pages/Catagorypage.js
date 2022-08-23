import './pages.css';
import { useSelector, useDispatch } from 'react-redux';
import { CHECK } from '../redux/catagories/catagories';

const Catagories = () => {
  const output = useSelector((state) => state.catagories);
  const dispatch = useDispatch();

  const catagButton = () => {
    dispatch(CHECK());
  };
  return (
    <div className="catagory">
      <button className="buttons" type="button" onClick={catagButton}>check status</button>
      <h4>{output}</h4>
    </div>
  );
};

export default Catagories;
