import React from 'react';
import PropTypes from 'prop-types';

function Image(props: any) {
  const { src, alt, ...rest } = props;
  console.log(props.src)
  return <img src={src} alt={alt} { ...rest } />;
}

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;