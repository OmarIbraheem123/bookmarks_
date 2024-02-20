import {StrictMode} from "react";
import './App.module.scss'
import { createRoot } from "react-dom/client";
import App from './App'
const root = createRoot(document.getElementById("app"))

root.render(
    <StrictMode>
            <App />
    </StrictMode>
)