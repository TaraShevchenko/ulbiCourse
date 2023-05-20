import {render} from "react-dom";
import Counter from "./pages/Counter";
import Main from "./pages/Main";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import ThemeProvider from "./theme/ThemeProvider";
import './styles/index.scss';
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Toggle theme</button>
            </div>
            <Link to="/">Main</Link>
            <Link to="/counter">Counter</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);