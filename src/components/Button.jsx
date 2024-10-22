/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  return (
    <div>
      {props.type === "primary" ? (
        <button
          css={css`
            background-color: #074ee8;
          `}
        >
          Button
        </button>
      ) : (
        <button
          css={css`
            background-color: #07a4e8;
          `}
        >
          Button
        </button>
      )}
    </div>
  );
}

export default Button;
