import React from "react";
import "./ComicItem.css";
import { Link } from "react-router-dom";

type Props = {
  comics: {
    title: string;
    description: string;
    id:number;
  };
};

function ComicItem({ comics }: Props) {
  console.log("comicItem", comics);
  return (
    <>
      <Link to={`/comics/${comics.id}`}>
        <div className="content">
          <img className="image" src="pdf.png" alt="Горы" />
          <div className="title">{comics.title}</div>
          <p className="description">{comics.description}</p>
        </div>
      </Link>
    </>
  );
}

export default ComicItem;
