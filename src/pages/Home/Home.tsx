import react, {useEffect, useState} from 'react'
import "./Home.css";
import {useFetching} from '../../hooks/useFetching'
import PostServece from "../../API/PostServece";
import ComicItem from '../../components/ComicItem/ComicItem';

type Props = {
  name: string;
  pending: boolean
};

export function Home({ name, pending }: Props) {
  const [comics, setComics]=useState([]);
  const [categories, setCategories]=useState([]);
  const [tags, setTags]=useState([]);

  const [getComics, pendingGetComics, errorGetComics] = useFetching(async()=>{
    const resp:any = await PostServece.getAllComics()
    resp.data.data&&setComics(resp.data.data)
  })
  const [getTags, pendingGetTags, errorGetTags] = useFetching(async()=>{
    const resp:any = await PostServece.getTags()
    resp.data&&setTags(resp.data)
  })
  const [getCategories, pendingGetCategories, errorGetCategories] = useFetching(async()=>{
    const resp:any = await PostServece.getCategories()
    resp.data&&setCategories(resp.data)
  })
  console.log('comics', comics)
  console.log('tags', tags)
  console.log('categories', categories)
  useEffect(()=>{
    getComics();
    getTags();
    getCategories();
  },[])

  return (
    <>
      <div className="container2">
        <h1>This is Home page</h1>
        {name ? (
          <h3>hello {name}</h3>
        ) : (
          <h3>Sorry, you are not authenticated</h3>
        )}
      <div className="comics-container">
        {comics&&comics.map(item=>(
          <ComicItem comics={item}/>
        ))}
      </div>

      </div>

    </>
  );
}
