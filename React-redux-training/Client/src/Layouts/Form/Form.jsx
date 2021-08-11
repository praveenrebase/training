import React, { Fragment } from 'react';
import './Form.css'

const Form = ({ visitors, updateVisitors }) => {

    return (
        <Fragment>
            <form className="form" onSubmit={updateVisitors}>
                <input type="text" id="name" placeholder="Your nice name"></input>
                <br />
                <button type="submit">Hit Me</button>
                <br />
                <p>Total Visits on this site: {visitors}</p>
            </form>
        </Fragment>
    )
}

export default Form