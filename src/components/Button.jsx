/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <div>
      {type === "primary" ? (
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
            background-color:#07A4E8;
          `}>Button</button>
      )}
    </div>
  );
}

export default Button;