import React, {useState, useEffect} from 'react'
import {useFetching} from '../../hooks/useFetching'
import PostServece from "../../API/PostServece";
import { useParams } from 'react-router-dom';

type Props = {}

export const ComicDetail = (props: Props) => {
    const { id } = useParams()
    const [comic, setComic]=useState({})
    const [getOneComic, pendingGetOneComic, errorGetOneComic] = useFetching(async()=>{
        const resp:any = id?await PostServece.getOneComics(id):null;
        console.log('comic', resp.data)
        resp.data.data&&setComic(resp.data.data)
      })
    
    

    useEffect(()=>{
        id&&getOneComic()
    },[])

  return (
    <div>ComicDetail {id}</div>
  )
}

