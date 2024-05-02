import React from "react";

function Imagebg(props) {
  return (
    <p
      className='mt-14 bg-clip-text text-transparent
        bg-[url("https://c4.wallpaperflare.com/wallpaper/294/545/140/abstract-fluid-colorful-interference-dark-hd-wallpaper-preview.jpg")]
        text-8xl font-Raleway font-bold'
        dangerouslySetInnerHTML={{__html:props.data}}
    >
    </p>
  );
}

export default Imagebg;
