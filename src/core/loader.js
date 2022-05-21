import DispatcherStack from "./DispatcherStack";

function createLoader(store) {
    const dispatcherStack = DispatcherStack;
    const reduxStore = store;

    //this function name will change later
    function getSsrPreLoad(callback) {
        if(typeof  callback !== 'function') throw new Error("getSsrPreLoad takes a callback function");
        const callbackWithStore = callback();

        dispatcherStack.add(callbackWithStore(reduxStore));
    }

    async function StartApiLoader() {
        await dispatcherStack.call();
    }

    return {
        // store: store,
        // push: function (action) {
        //     dispatcherStack.add(action(this.store));
        // },

        StartApiLoader,
        getSsrPreLoad
    }
}

// export function tracker(callback, store) {
//     const dispatcherStack = DispatcherStack;
//     if(typeof  callback !== 'function') throw new Error("tracker takes a callback function");
//     const callbackWithStore = callback();
//
//     dispatcherStack.add(callbackWithStore(store))
// }

export default createLoader;