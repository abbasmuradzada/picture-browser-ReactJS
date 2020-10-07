import axios from "axios";

export default axios.create({
    baseUrl : 'https://api.unsplash.com',
    headers : {
        Authorization: 
            'Client-ID hrXGktMw6yRH7qgZk-NsR4D9OfdFkHQRFoypx7svaYE',
    }
})