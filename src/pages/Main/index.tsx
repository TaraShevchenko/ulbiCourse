import {lazy} from "react";

const Main = lazy(() => new Promise(resolve => {
    //TODO: Only for testing purposes
    // @ts-ignore
    setTimeout(() => resolve(import('./Main')), 2000)
}))

export default Main;