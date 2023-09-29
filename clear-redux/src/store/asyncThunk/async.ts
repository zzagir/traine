import { addCustomer } from "../userReducer";

export const fetchUsersAsync = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addCustomer(json)));
  };
};
