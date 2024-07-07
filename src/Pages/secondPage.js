import React from "react";
import { useLocation } from 'react-router-dom';

const SecondPage = () => {
  const location = useLocation();
  const data = location.state;

  return <div>2nd page
    {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Age: {data.mobile}</p>
        </div>
      )}
  </div>;
};

export default SecondPage;
