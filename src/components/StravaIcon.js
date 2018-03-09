import React from "react";

// just a wrapper around SVG
const StravaIcon = props => {
  return (
    <svg
      className="blog"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "62"}
      height={props.size || "62"}
      version="1.1"
      viewBox="0 0 244 244"
      aria-labelledby="klsi-elusive-strava-title"
    >
      <g>
        <path
          fill="none"
          d="M122,242C55.8,242,2,188.2,2,122S55.8,2,122,2c66.2,0,120,53.8,120,120S188.2,242,122,242z M122,21.7
		c-55.3,0-100.3,45-100.3,100.3s45,100.3,100.3,100.3s100.3-45,100.3-100.3S177.3,21.7,122,21.7z"
        />
        <path
          fill={props.color || "black"}
          d="M122,21.7c-55.3,0-100.3,45-100.3,100.3s45,100.3,100.3,100.3s100.3-45,100.3-100.3S177.3,21.7,122,21.7z"
        />
        <g>
          <polyline
            fill="#ffefd5"
            points="139.4,184.3 112.3,131.1 128.4,131.1 139.4,152.6 150.2,131.1 166.3,131.1 139.4,184.3 		"
          />
          <polygon
            fill="#ffefd5"
            points="113.9,102.2 128.6,131.2 150.1,131.2 113.7,59.7 77.7,131.2 99.3,131.2 113.9,102.2 		"
          />
        </g>
      </g>
    </svg>
  );
};

export default StravaIcon;
