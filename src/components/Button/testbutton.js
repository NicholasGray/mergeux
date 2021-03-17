import React from 'react'; 
const Button = (props) => (
   <button {...props}>
     {props.icon}
     {props.children}
   </button>
 );
  
 export { Button as default };
 