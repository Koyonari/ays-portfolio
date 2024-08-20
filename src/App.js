import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-4xl underline font-bold">Hello World</h1>
      <Person />
    </div>
  );
};

const Person = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-500">Name: John</h1>
      <h2 className="text-3xl text-red-500">Age: 31</h2>
    </>
  );
};

export default App;
