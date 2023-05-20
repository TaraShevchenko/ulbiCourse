import {render} from "react-dom";
import Counter from "./components/Counter/Counter";

const App = () => {
    return (
        <div className="app">
            <h1>React TypeScript Webpack Starter Template</h1>
            <Counter />
        </div>
    );
}

render(<App />, document.getElementById('root'));