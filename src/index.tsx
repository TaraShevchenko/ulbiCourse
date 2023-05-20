import {render} from "react-dom";
import Counter from "./pages/Counter";
import Main from "./pages/Main";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Link to="/">Main</Link>
                <Link to="/counter">Counter</Link>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

render(<App/>, document.getElementById('root'));