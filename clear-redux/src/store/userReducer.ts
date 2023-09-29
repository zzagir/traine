const defaultState = {
  customers: [],
};

export const SET_USERS = "setusers";
export const FETCH_USERS = "fetchusers";
const ADDNAME = "addname";
const DELNAME = "delname";
const ADDCUSTOMER = "addcustomer";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, customers: action.payload };
    case ADDCUSTOMER:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADDNAME:
      return { ...state, customers: [...state.customers, action.payload] };
    case DELNAME:
      return {
        ...state,
        customers: [
          ...state.customers.filter(
            (customer) => customer.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const fetchUsers = () => ({ type: FETCH_USERS });
export const addNameUser = (payload) => ({ type: ADDNAME, payload });
export const delNameUser = (payload) => ({ type: DELNAME, payload });
export const addCustomer = (payload) => ({ type: ADDCUSTOMER, payload });
