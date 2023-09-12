import React from "react";
import Title, { TitleSize } from "../title/title";
import "./styles.css";

function AdvantagesItem({ image, owner, isNegative, title, text }) {
  return (
    <article
      className={`advantages-item${
        isNegative ? " advantages-item__negative" : ""
      }`}
    >
      <figure className="advantages-item__figure">
        <img
          src={image}
          className="advantages-item__image"
          width={52}
          height={52}
          alt={title}
        />
        <div>
          <span
            className={`advantages-item__owner${
              isNegative ? " advantages-item__owner-negative" : ""
            }`}
          >
            {owner}
          </span>
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </figure>
      <p className="advantages-item__text">{text}</p>
    </article>
  );
}

export default AdvantagesItem;
