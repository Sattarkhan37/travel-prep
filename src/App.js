import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
];
export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList items={items} onDeleteItem={handelDeleteItem} />
      <Starts />
    </div>
  );
}
function Logo() {
  return <h1>🌴🌴 Far Away 💼💼</h1>;
}
function Form({ onAddItems }) {
  const [description, setdecripction] = useState("");
  const [quantity, setquantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setdecripction("");
    setquantity("");
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What doi you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setdecripction(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Starts() {
  return (
    <footer className="stats">
      <em> 💼💼Your have X item on Your list ,and you already packed X</em>
    </footer>
  );
}
