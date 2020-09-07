import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  // this needs to be turned into a arrow function for binding 'this'. Otherwise it will throw error.
  // look at the previous commit to see how it was before.
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images.
        {/* Note: here we could have given any name other than onSubmit unlike in generic jsx */}
      </div>
    );
  }
}

export default App;
