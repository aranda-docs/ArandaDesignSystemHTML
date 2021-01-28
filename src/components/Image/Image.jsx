import React from 'react';
const Image = ({ srcUrl, ...props }) => {
    return(
      <img  src={srcUrl} />
    );
}
export default Image;