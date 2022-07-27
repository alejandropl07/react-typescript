import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import TimerFather from "./components/TimerFather";
import User from "./components/User";

function App() {
  return (
    <>
      <h1>React - TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerFather />
      <h2>useReducer</h2>
      <hr />
      <CounterReducer />
      <h2>Custom Hooks</h2>
      <Form />
      <br />
      <Form2 />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
