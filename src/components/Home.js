import React from "react";

function Home(props) {
  return (
    <div>
      home component
      <p>logged in:{props.userName}</p>
    </div>
  );
}

export default Home;
