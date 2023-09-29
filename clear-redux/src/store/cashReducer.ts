const defaultState = {
  cash: 0,
};

export const INCREMENT = "increment";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "decremented";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, cash: state.cash + 1 };
    case DECREMENT:
      return { ...state, cash: state.cash - 1 };
    default:
      return state;
  }
};

export const incrementCreator = () => ({ type: INCREMENT });
export const asyncIncrementCreator = () => ({ type: ASYNC_INCREMENT });
export const decrementCreator = () => ({ type: DECREMENT });
export const asyncDecrementCreator = () => ({ type: ASYNC_DECREMENT });
