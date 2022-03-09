import axios from 'axios';

export const getDetails = async ()=>{
    try{
        const {data} = await axios.get("https://randomuser.me/api/?results=5");

        return data;
    }catch(err){
        return err;
    }
}

export default {
    getDetails
}