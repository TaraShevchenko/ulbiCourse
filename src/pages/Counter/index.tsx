import {lazy} from "react";

const Counter = lazy(() => new Promise(resolve => {
    //TODO: Only for testing purposes
    // @ts-ignore
    setTimeout(() => resolve(import('./Counter')), 2000)
}))
export default Counter;