import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { useFetching } from "../../hooks/useFetching";
import PostServece from "../../API/PostServece";
import { AddNewComics } from "../../components/forms/AddNewComics/AddNewComics";

import "./Profile.css";

type Props = {
  user: {id:number}|any;
};

export function Profile({ user }: Props) {
  const navigate = useNavigate();

  console.log('user', user.id)

  return (
    <>
      <div className="container">
        <h2>hello monthefuckers!</h2>
        <AddNewComics user={user}/>
      </div>
    </>
  );
}
