import React from "react";

// just a wrapper around SVG
const EmailIcon = props => {
  return (
    <svg
      className="email"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "62"}
      height={props.size || "62"}
      version="1.1"
      viewBox="0 0 1024 768"
      aria-labelledby="klsi-elusive-email-title"
    >
      <title id="title">Email Icon</title>
      <path
        fill={props.color || "black"}
        d="M1024 59q-2-25-20.5-42T960 0H64Q38 0 19 19T0 64v640q0 26 19 45t45 19h896q26 0 45-19t19-45V59zm-112 5L512 367 130 64h782zm48 640H64V93l428 339q19 16 39 1l429-325v596z"
      />
    </svg>
  );
};

export default EmailIcon;
