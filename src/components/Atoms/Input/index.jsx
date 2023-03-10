import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
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
`;
