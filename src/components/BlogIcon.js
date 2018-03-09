import React from "react";

// just a wrapper around SVG
const BlogIcon = props => {
  return (
    <svg
      className="blog"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "62"}
      height={props.size || "62"}
      version="1.1"
      viewBox="0 0 1200 1200"
      aria-labelledby="klsi-elusive-rss-title"
    >
      <title id="title">Blog Icon</title>
      <path
        fill={props.color || "black"}
        d="M1200 1200C1200 537.258 662.742 0 0 0v240.015c530.193 0 959.985 429.792 959.985 959.985H1200zm-480.029 0c0-397.646-322.325-719.971-719.971-719.971V719.97c265.097 0 480.029 214.933 480.029 480.029h239.942zm-479.956 0c0-132.549-107.466-240.015-240.015-240.015V1200h240.015z"
      />
    </svg>
  );
};

export default BlogIcon;
