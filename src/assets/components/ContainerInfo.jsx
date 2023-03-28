import React from "react";
import Button from "./Button";
import "./styles/ContainerInfo.css";

const ContainerInfo = ({ quote, handleNewQuoate }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo_title">Galleta de la fortuna</h1>

      <Button handleNewQuoate={handleNewQuoate} />

      <article className="containerInfo_quote">
        <p>
          {quote.quote}
          <p></p>
        </p>
      </article>

      <article className="containerInfo_author">
        <h4>Author:{quote.author}</h4>
      </article>
    </section>
  );
};

export default ContainerInfo;
