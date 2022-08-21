import React from "react";
import { Link } from "react-router-dom";

class About extends React.PureComponent {
    render() {
        return (
            <div>
                this is About<br />
                <Link to={'/'}>to home</Link>
            </div>
        )
    }
}

export default About