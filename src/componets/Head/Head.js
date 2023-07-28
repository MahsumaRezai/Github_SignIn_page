import { Fragment } from "react";
import log from './imag/gitlog.PNG'
const Head = (props) => {
    return (
        <Fragment>
            <div>
                <img alt="" src={log} />
                <p>Sign in to GitHub</p>
            </div>
        </Fragment>

    )

}
export default Head;
