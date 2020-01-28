import firebase from '../FirebaseConnection';

export const checkLogin = () => {
    return (dispatch) => {
        let user = firebase.auth().currentUser;

        if(user) {
            dispatch({
                type: 'changeStatus',
                payload: {
                    status: 1
                }
            });
        }else {
            dispatch({
                type: 'changeStatus',
                payload: {
                    status: 2
                }
            });
        }
    }
};

export const changeEmail = (email) => {
   return {
    type: 'changeEmail',
    payload: {
        email: email
    }
   } 
};
export const changePassword = (password) => {
    return {
     type: 'changePassword',
     payload: {
        password: password
     }
    } 
 };
 export const changeName = (name) => {
    return {
     type: 'changeName',
     payload: {
        name: name
     }
    } 
 };