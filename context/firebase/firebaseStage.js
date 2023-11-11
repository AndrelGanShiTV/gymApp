import React, { useReducer } from "react";
import firebase from "../../firebase";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";

const FirebaseStage = (props) => {
  //Crear consulta a la BD
  const inicialStage = {
    training: [],
  };

  //Uso del useReducer
  const [state, dispach] = useReducer(FirebaseReducer, inicialStage);

  const getTraining = () => {
    firebase.db.collection("training").onSnapshot(manejarSnapshot);

    // function manejarSnapshot(snapshot) {
    //   let training = snapshot.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.date(),
    //     };
    //   });
    // }
  };

  return (
    <FirebaseContext.Provider
      value={{
        training: state.training,
        firebase,
        getTraining,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseStage;
