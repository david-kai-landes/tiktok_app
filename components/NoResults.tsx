import React from 'react';

interface Iprops {
    text: string;
}

const NoResults = ({ text }: Iprops) => {
  return (
    <div>No Results</div>
  )
}

export default NoResults