import React, { useEffect } from "react";

const Alert = (props) => {
  const { type, msg, removeAlert } = props;
  useEffect(() => {
    const clearTimeOutInput = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(clearTimeOutInput);
    };
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
