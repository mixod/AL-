import { createContext } from "react";

export const NewContext = createContext();
export function Contextsss({ children }) {
  return (
    <div>
      <NewContext.Provider>{children}</NewContext.Provider>
    </div>
  );
}
