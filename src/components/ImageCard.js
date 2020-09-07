import React from "react";

class ImageCard extends React.Component {
  render() {
    // destructuring the reusable compoents for code readability
    const { description, urls } = this.props.image;

    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
