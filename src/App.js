const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Starts />
    </div>
  );
}
function Logo() {
  return <h1>🌴🌴 Far Away 💼💼</h1>;
}
function Form() {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What doi you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Item.." />
      <button>Add Item</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
