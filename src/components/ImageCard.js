import React from "react";

class ImageCard extends React.Component {
  //creating the reference for the image
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  //console logging the entire application after the component gets rendered
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    // here setSpans is a callback to the evenlistener and hence needs to be bounded
    // use => function for directly making it bounded
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // 10 - depends on the grid auto rows in css section
    this.setState({ spans: spans }); // could have also written as this.setStates({spans}) // because the names spans: spans are same
  };

  render() {
    // destructuring the reusable compoents for code readability
    const { description, urls } = this.props.image;

    return (
      // ES2015 syntax for passing the span value as a style to the div
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
