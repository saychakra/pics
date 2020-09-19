import React from "react";

class ImageCard extends React.Component {
  //creating the reference for the image
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  //console logging the entire application after the component gets rendered
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    // here setSpans is a callback to the evenlistener and hence needs to be bounded
    // use => function for directly making it bounded
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

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
