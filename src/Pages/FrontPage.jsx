import React from 'react';
import Main from '../components/Main/Main';
const FrontPage = ({ newProducts }) => {
  return (
    <div>
      <Main newProducts={newProducts} />
    </div>
  );
};

export default FrontPage;
