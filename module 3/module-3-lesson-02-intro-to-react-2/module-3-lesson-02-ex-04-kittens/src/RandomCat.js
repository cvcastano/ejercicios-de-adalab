import React from "react";


function RandomCat(props) {

  return (
    <li>
      <a href="http://placekitten.com"></a>
      <img src={`http://placekitten.com/${props.width || 400}/${props.height || 200}`} alt="Random cat"/>
    </li>
  );

}

export default RandomCat;