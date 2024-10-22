// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ErrorIcon from "../assets/ErrorAlertBox.svg";
import WarningIcon from "../assets/WarningAlertBox.svg";
import InfoIcon from "../assets/InfoAlertBox.svg";
import SuccessIcon from "../assets/SuccessAlertBox.svg";

function Alert(props) {

  let result;

  if (props.event === "error") {
    result = ErrorIcon;
  } else if (props.event === "warning") {
    result = WarningIcon;
  }else if(props.event === "info"){
    result = InfoIcon;
  }else{
    result = SuccessIcon;
  }
  return (
    <div>
        <img src={result}/>
    </div>

    )
}

export default Alert;
