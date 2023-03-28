import { useState } from "react";
import db from "./db/db.json";
import "./App.css";
import ContainerInfo from "./assets/components/ContainerInfo";
const images = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const getRandomItem = (listItems) => {
    const randonIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randonIndex];
  };
  const [quote, setQuote] = useState(getRandomItem(db));

  const [bgImage, setBgImage] = useState(getRandomItem(images));
  const handleNewQuoate = () => {
    setQuote(getRandomItem(db));
    setBgImage(getRandomItem(images));
  };

  return (
    <div className={`App ${bgImage}`}>
      <ContainerInfo quote={quote} handleNewQuoate={handleNewQuoate} />
    </div>
  );
}

export default App;
