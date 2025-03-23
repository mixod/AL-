import { useContext } from "react";
import { NewContext } from "../Context/Contextsss";

function Contact() {
  const { state, setState } = useContext(NewContext);
  return (
    <div className="mt-30">
      {state}
      <button onClick={() => setState(state + 1)}>CLick</button>
    </div>
  );
}

export default Contact;
