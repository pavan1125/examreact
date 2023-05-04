import React from "react";

export default function Screen(props) {
 
  return (
    <video controls className={props.color} style={{ width: '50vw', height: 'auto' }}>
      { props.source ? <source src={props.source} type="video/mp4" /> : "Your browser does not support the video tag."}
    </video>
  );
}
