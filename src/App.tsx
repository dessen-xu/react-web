import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./coms/About";
import Home from "./coms/Home";
import Counter from './coms/Counter'

class App extends React.PureComponent {

    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                </Routes>
            </div>
        )
    }
}

export default App