import React from "react"
import { createRoot } from "react-dom/client"
import App1 from "./src/components/App1/App1"
import Header from "./src/components/Header/Header"
import Paragraph from "./src/components/Paragraph/Paragraph"

const App = () => {
    return <><App1 /><Header /><Paragraph /></>
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<App />)