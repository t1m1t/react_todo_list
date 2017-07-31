export default function({dispatch}){
    return next => action => {
        //Code goes here

        if(!action.payload || !action.payload.then) {
            next(action);
            return;
        }

        action.payload.then((resp) => {
            const newAction = {...action, payload: resp}
            dispatch(newAction);
        })

        return action.payload;
    }
}

// export default function({dispatch}){
//     return function(next){
//         return function(action){
//             //Code goes here
//         }
//     }
// }