import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    if (!inputRef.current) {
      return;
    }
    inputRef.current.addEventListener("focusout", () =>
      onEditComplete(inputRef.current.value)
    );
    inputRef.current.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        onEditComplete(inputRef.current.value);
      }
    });
  }, []);

  return <StyledInput ref={inputRef} />;
};

export default Input;

const StyledInput = styled.input`
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  border: none;
  outline: none;
  padding: 0px 4px;
  border-radius: 2px;
  width: 418px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 198px;
  }
`;
