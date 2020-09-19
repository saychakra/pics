import React from "react";

class ImageCard extends React.Component {
  //creating the reference for the image
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  //console logging the entire application after the component gets rendered
  componentDidMount() {
    // here if we console log the imageRef, we will be able to see the clientHeight
    // but console logging the clientHeight within this componentDidMount() is too early, because the
    // image is not downloaded completely from the api source and before that the console log is taking place
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    // destructuring the reusable compoents for code readability
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
