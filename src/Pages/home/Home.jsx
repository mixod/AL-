import { useContext } from "react";
import { NewContext } from "../Context/Contextsss";

function Home() {
  const { myName } = useContext(NewContext);
  return <div>My name is {myName}</div>;
}

export default Home;
