import React from "react";
import { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import styled from "styled-components";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (!AlertHandlerContext.visible) {
      return;
    } else {
      setTimeout(AlertHandlerContext.closeAlert, 5000);
    }
  }, [AlertHandlerContext]);

  return (
    <StyledAlert>
      <Alert
        errorText={AlertHandlerContext.errorText}
        visible={AlertHandlerContext.visible}
      />
    </StyledAlert>
  );
};
export default AlertManager;

const StyledAlert = styled.div`
  display: flex;
  justify-content: center;
`;
