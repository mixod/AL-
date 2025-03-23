/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
export const NewContext = createContext();

export function ContextNew({ children }) {
  const myName = "sangram";
  const [state, setState] = useState(0);
  return (
    <div>
      <NewContext.Provider value={{ myName, state, setState }}>
        {children}
      </NewContext.Provider>
    </div>
  );
}
