import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    // note: key should be added to the root property of any tag.
    // so if we had a <div> wrapped around the <img/>, then we would be specifying the keys on the <div>
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
      // we could have also used js destructuring, but it looked a bit tough for me!
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
