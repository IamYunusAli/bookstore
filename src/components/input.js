import './components.css';

const Input = () => (
  <div className="inputform">
    <div className="form-divider" />
    <h2>ADD NEW BOOK</h2>
    <form className="form">
      <input className="input titleinput" placeholder="Book Title" />
      <select className="input selectinput">
        <option> Scifi</option>
        <option> Romantic</option>
        <option> Fiction</option>
      </select>
      <button className="buttons addbook" type="submit"> Add Book</button>
    </form>
  </div>
);

export default Input;
