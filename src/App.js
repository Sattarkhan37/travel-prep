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
  return (
    <div className="add-form">
      <h3>What doi you need for your 😍 trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}
function Starts() {
  return (
    <footer className="stats">
      <em> 💼💼Your have X item on Your list ,and you already packed X</em>
    </footer>
  );
}
