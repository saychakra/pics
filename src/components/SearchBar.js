import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* note: this.onInputChange is a reference to the callback function onInputChange()
                  we DO NOT pass it like this.onInputChange() - which suggests that the function will be 
                  called everytime the render() function is rendered. Instead () is avoided to make sure 
                  that the reference to the callback function is given to <input> which would call it instead */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* here, onChange cannot be changed to any other name, the function onInputChange can be though */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
