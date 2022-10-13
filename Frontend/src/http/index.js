import axios from "axios";

const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    withCredentials:true,
    headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
    }
})

export const add_new_member=(data)=> {
    console.log(data);
    api.post('/add-member',data);
}


export default api;