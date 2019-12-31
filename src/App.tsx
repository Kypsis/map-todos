import React from "react";

import Header from "../src/components/Header/Header.component";
import Map from "../src/pages/Map/Map.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
};

export default App;
