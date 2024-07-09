import { useReducer } from "react";
import { createContext } from "react";

const INITIAL_STATE = {
  city: undefined,
  Dates: [],
  options: {
    adult: undefined,
    Children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH ":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
