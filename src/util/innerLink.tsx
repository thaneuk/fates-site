import React from 'react';

const hitInnerLink = (event: React.MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  const innerLink = event.currentTarget.querySelector('a');
  innerLink && innerLink.click();
};

export default hitInnerLink;
