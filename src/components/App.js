import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
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
