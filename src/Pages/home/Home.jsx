import React, { useContext } from "react";

function Home() {
  const { state, setState } = useContext();

  return (
    <>
      {state}
      <button onClick={() => setState((state) => state + 1)}>click</button>
      <div className="my-10 mx-10 text-4xl">Home</div>;
    </>
  );
}

export default Home;
