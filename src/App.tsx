import React from "react";

import Header from "../src/components/Header/Header.component";
import Map from "../src/components/Map/Map.component";

interface Props {}

const App: React.FC<Props> = props => {
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
};

export default App;
