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
  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handelToggleItem}
      />
      <Starts items={items} />
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
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Starts({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything to go"
          : `💼💼Your have ${numItems} item on Your list ,and you already packed
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
