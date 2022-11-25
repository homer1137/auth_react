import axios from "axios"



export default class PostServece {
    static async register(data:object){
        const response = await axios.post("http://127.0.0.1:8000/api/register", data, {
            withCredentials: true,    
        headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              }
        })
        return response;
    }

    static async login(data:object){
        const response = await axios.post("http://127.0.0.1:8000/api/login", data, {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              },
              
        })
        return response;
    }

    static async user(){
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              },
              
        })
        return response;
    }

    static async createComics(data:object){
        const response = await axios({
            method: "post",
        url: "http://127.0.0.1:8000/api/file-upload",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
              
        })
        return response;
    }
    
    static async getCategories(){
        const response = await axios.get("http://127.0.0.1:8000/api/comic-categories", {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              },
              
        })
        return response;
    }

    static async getTags(){
        const response = await axios.get("http://127.0.0.1:8000/api/tags", {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              },
              
        })
        return response;
    }

    static async getAllComics(){
        const response = await axios.get("http://127.0.0.1:8000/api/comics", {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              },
              
        })
        return response;
    }

    static async getOneComics(id:string){
        const response = await axios.get(`http://127.0.0.1:8000/api/comics/${id}`, {
            withCredentials: true,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              },
              
        })
        return response;
    }
}