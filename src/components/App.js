import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID MbRN5TJnIIHDZrvTfqZxlox2foA3Q6eJEyJkdF09qUc",
      },
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Note: here we could have given any name other than onSubmit unlike in generic jsx */}
      </div>
    );
  }
}

export default App;
