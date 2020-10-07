import React from "react";
import axios from "axios"; 
import SearchBar from "../components/SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
        images : [],
    }

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params : { query : term },
            headers : {
                Authorization: 'Client-ID hrXGktMw6yRH7qgZk-NsR4D9OfdFkHQRFoypx7svaYE',
            }
        })

        this.setState({ images : response.data.results })
    }
    
    render(){
        return(
            <div className="ui container" style={{ marginTop:'10px' }}>
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;