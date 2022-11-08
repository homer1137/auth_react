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
    
}