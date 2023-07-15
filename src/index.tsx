import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme';
import App from './app/App';
import 'shared/config/i18n';

render(
    <Suspense fallback="">
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root'),
);
