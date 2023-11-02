import React, {useReducer} from 'react';
import firebase from '../../firebase'
import FirebaseContext from './firebaseContext'
import FirebaseReducer from './firebaseReducer'

const FirebaseStage = props => {
    //Crear consulta a la BD
    const inicialStage = {
        training: []
    };

    //Uso del useReducer
    const[state, dispach] = useReducer(FirebaseReducer, inicialStage);

    return(
        <FirebaseContext.Provider
            value={{
                training: state.training,
                firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
     
}

export default FirebaseStage;