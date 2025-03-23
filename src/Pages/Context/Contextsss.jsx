import { createContext } from "react";
export const NewContext = createContext();

export function ContextNew({ children }) {
  const myName = "sangram";
  return (
    <div>
      <NewContext.Provider value={myName}>{children}</NewContext.Provider>
    </div>
  );
}
