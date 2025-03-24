import { useContext } from "react";
import { NewContext } from "../Context/Contextsss";

function About() {
  const { state, setState } = useContext(NewContext);
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>CLick</button>
    </div>
  );
}

export default About;
