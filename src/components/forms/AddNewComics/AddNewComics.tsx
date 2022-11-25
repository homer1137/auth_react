import React, { useState, SyntheticEvent } from "react";
import { useFetching } from "../../../hooks/useFetching";
import PostServece from "../../../API/PostServece";
import { useNavigate } from "react-router-dom";

import "./AddNewComics.css";

type Props = {
    user: {id:number}
};

interface PostData {
  title: string;
  description: string;
  preview: string;
  file: File | null;
  user_id: number
}

export const AddNewComics = ({user}: Props) => {

  const navigate = useNavigate();
  const [data, setData] = useState<PostData>({
    title: "",
    preview: 'sdfsdf',
    description: "",
    file: null,
    user_id: user.id

  });

  const loginFormData = new FormData();
  loginFormData.append("title", data.title)
  loginFormData.append("preview", data.preview)
  loginFormData.append("description", data.description)
  loginFormData.append("user_id", `${data.user_id}`)
  data.file&&loginFormData.append("file", data.file)


  const [setComics, pendingSetComics, errorSetComics] = useFetching(
    async () => {
      const resp: any = await PostServece.createComics(loginFormData);

    }
  );

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await setComics();
  };

  // inputFileRef.current.files[0].name

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setData((prevData) => ({
      ...prevData,
      file: event.target.files ? event.target.files[0] : null,
    }));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    console.log(event.target.name, event.target.value)
    switch(event.target.name){
        case 'title': setData((prevData) => ({
            ...prevData,
            title: event.target.value,
          }));
          break;
          case 'description': setData((prevData) => ({
            ...prevData,
            description: event.target.value,
          }));
          break;
    }
 
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="container">
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input type="text" placeholder="title" name="title" required onChange={handleInputChange}/>
          <label htmlFor="password">
            <b>Description</b>
          </label>
          <textarea placeholder="description" name="description" required onChange={handleInputChange}/>
          <label htmlFor="pdfFile">
            <b>Add PDF file</b>
          </label>
          <input
            type="file"
            placeholder="add PDF file"
            name="pdfFile"
            required
            onChange={handleImageChange}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
