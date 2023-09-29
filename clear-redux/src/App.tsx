import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNameUser, delNameUser, fetchUsers } from "./store/userReducer";
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
} from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const users = useSelector((state) => state.user.customers);
  console.log(users);

  const addCash = (cash: number) => {
    dispatch({ type: "increment", payload: cash });
  };
  const noAddCash = (cash: number) => {
    dispatch({ type: "decremented", payload: cash });
  };
  const addName = (name: string) => {
    const customer = {
      id: Date.now(),
      name,
    };

    // dispatch({ type: "addname", payload: customer });
    dispatch(addNameUser(customer));
  };
  const delName = (customer: string) => {
    // dispatch({ type: "delname", payload: customer.id });
    dispatch(delNameUser(customer.id));
  };

  return (
    <div>
      <h1>Число: {cash}</h1>
      {users.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            justifyContent: "center",
          }}
        >
          {users.map((user: string) => (
            <div key={user.name} onClick={() => delName(user)}>
              <h1>{user.name}</h1>
            </div>
          ))}
        </div>
      ) : (
        <h1>Нет юзеров</h1>
      )}
      <button onClick={() => addCash(Number(prompt()))}>плюсовать</button>
      <button onClick={() => dispatch(asyncIncrementCreator())}>
        плюсовать асинхр
      </button>
      <button onClick={() => noAddCash(Number(prompt()))}>минусовать</button>
      <button onClick={() => dispatch(asyncDecrementCreator())}>
        минусовать асинхр
      </button>
      <button onClick={() => addName(prompt())}>добавить новое имя</button>
      <button onClick={() => dispatch(fetchUsers())}>получить клиентов</button>
      <button onClick={() => dispatch(fetchUsers())}>
        получить клиентов saga
      </button>
    </div>
  );
}

export default App;
