import { useReducer } from "react";

export const initialState = [
  {
    name: "Buy macbook",
    isCompleted: true,
  },
  {
    name: "Shopping",
    isCompleted: false,
  },
  {
    name: "Work",
    isCompleted: false,
  },
];

const COMPLETE = "COMPLETE";
const UNCOMPLETE = "UNCOMPLETE";

const reducer = (state, action) => {
  switch (action.type) {
    case COMPLETE:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = true;
        return i;
      });

    case UNCOMPLETE:
      return state.map((i) => {
        if (i.name === action.payload) i.isCompleted = false;
        return i;
      });

    default:
      return state;
  }
};

function UseReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>use reducer hook</h3>
      {state.map((todo) => (
        <button
          onClick={() =>
            dispatch({
              type: todo.isCompleted ? UNCOMPLETE : COMPLETE,
              payload: todo.name,
            })
          }
          key={todo.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: todo.isCompleted ? "green" : "red",
              width: 15,
              height: 15,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {todo.name}
          </div>
        </button>
      ))}
    </div>
  );
}

export default UseReducerTest;
