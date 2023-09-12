import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import AdvantagesItem from "/src/components/ui/advantages-item/advantages-item";
import Button from "/src/components/ui/button/button";
import "./styles.css";

function AdvantagesList({ advantages }) {
  return (
    <section className="advantages">
      {advantages?.length ? (
        <>
          <Title size={TitleSize.DEFAULT}>
            Почему фермерские продукты лучше?
          </Title>
          <ul className="advantages__list">
            {advantages.map((advantage) => (
              <li className="advantages__item" key={advantage.id}>
                <AdvantagesItem {...advantage} />
              </li>
            ))}
          </ul>
          <div className="advantages__button-wrapper">
            <Button>Купить</Button>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default AdvantagesList;
