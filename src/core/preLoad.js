/***@var dispatch**/

export function getPreState(action) {
    return function (store) {
        return async function (next) {
            if(typeof action !== 'string') //this condition check is for testing purpose
            await store.dispatch(action);
           //  // else
           // // console.log(action);

            return await next();
        }
    }
}