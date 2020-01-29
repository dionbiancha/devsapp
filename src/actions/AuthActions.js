import firebase from '../FirebaseConnection';

export const checkLogin = () => {
    return (dispatch) => {

        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: user.uid
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
        });
    }
};

export const signUp = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=>{
                let uid = firebase.auth().currentUser.uid;
                
                firebase.database().ref('users').child(uid).set({
                    name: name
                });

                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: uid
                    }
                });
            })
            .catch((error)=>{
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        alert("E-mail já utilizado!");
                        break;
                    case 'auth/invalid-email':
                        alert("E-mail inválido!");
                        break;
                    case 'auth/operation-not-allowed':
                        alert("Tente novamente mais tarde!");
                        break;
                    case 'auth/week-password':
                        alert("Digite uma senha melhor!");
                        break;
                }
            });
    };
};

export const signIn = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{
                let uid = firebase.auth().currentUser.uid;

                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: uid
                    }
                });
            })
            .catch((error)=>{
                switch(error.code) {
                    case 'auth/invalid-email':
                        alert("Email inválido!");
                        break;
                    case 'auth/user-disabled':
                        alert("Seu usuário está desativado!");
                        break;
                    case 'auth/user-not-found':
                        alert("Não existe este usuário!");
                        break;
                    case 'auth/wrong-password':
                        alert("E-mail ou senha inválidos!");
                        break;
                }
            });
    };
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