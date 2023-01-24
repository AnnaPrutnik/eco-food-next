import { FC } from "react";
import { Categorie, Product, Section, Card, Filter } from "./heading.styled";

interface IHeading {
  type?: "categorie" | "product" | "section" | "card" | "filter";
  text: string;
}

export const Heading: FC<IHeading> = ({ type, text }) => {
  switch (type) {
    case "categorie":
      return <Categorie>{text}</Categorie>;

    case "product":
      return <Product>{text}</Product>;

    case "section":
      return <Section>{text}</Section>;

    case "card":
      return <Card>{text}</Card>;

    case "filter":
      return <Filter>{text}</Filter>;

    default:
      return <Categorie>{text}</Categorie>;
  }
};
