// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import alerttriangle from "../assets/alert-triangle.svg"
import alertcircle from "../assets/alert-circle.svg"
import checkcircle from "../assets/check-circle.svg"

function ArtBox({ backgroundColor, message, icon }){
    return(
        <div
        css={css`
          background-color: ${backgroundColor};
          width: 650px;
          height: 76px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        `}
        
      >
         <img src={icon}/>
        <h1
          css={css`
            font-size: 20px;
          `}
        >
            {message}
        </h1>
        </div>

    )
}

function Alert() {
    return (
      <>
        <ArtBox
          backgroundColor="#f9c8c8" 
          message="This is error alert box" 
          icon={frown} 
        />
        <ArtBox
          backgroundColor="#f9d9c8" 
          message="This is warning alert box" 
          icon={alerttriangle} 
        />
        <ArtBox
          backgroundColor="#f9ebc8" 
          message="This is info alert box" 
          icon={alertcircle} 
        />
        <ArtBox 
          backgroundColor="#cef7cd" 
          message="This is success alert box" 
          icon={checkcircle} 
        />
      </>
    );
  }
  
  export default Alert;

