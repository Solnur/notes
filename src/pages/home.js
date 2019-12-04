import React from "react";
import firebaseApp from "src/lib/firebase";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => firebaseApp.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
