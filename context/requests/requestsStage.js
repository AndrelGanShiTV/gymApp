import React, { useReducer } from "react";
import RequestContext from "./requestsContext";
import RequestsReducer from "./requestsReducer";

const RequestsStage = (props) => {
  //Crear consulta a la BD
  const inicialStage = {
    requests: [],
  };

  //Uso del useReducer
  const [state, dispach] = useReducer(RequestsReducer, inicialStage);

  return (
    <RequestContext.Provider
      value={{
        requests: state.requests,
      }}
    >
      {props.children}
    </RequestContext.Provider>
  );
};

export default RequestsStage;
