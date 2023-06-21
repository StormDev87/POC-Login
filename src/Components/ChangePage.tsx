import React from 'react';
import {Navigate} from "react-router-dom";


interface IChangePage {
  pageTo: string;
}

const ChangePage : React.FC<IChangePage> = (props) => {
  return (
    <div>
      {props.pageTo}
      <Navigate to={props.pageTo}/>
    </div>
  );
};

export default ChangePage;