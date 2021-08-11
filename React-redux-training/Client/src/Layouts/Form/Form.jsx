import React, { Fragment } from 'react';
import './Form.css'
import { useSelector } from 'react-redux';

import { addStudent, addStudentSuccess, addStudentFailed } from '../../Action/Actions';
import { registerMyName } from '../../Api/api';
import store from '../../Store/store';

const Form = () => {

    const totalVisit = useSelector((state) => state.totalVisits)

    const addingStudend = () => {
        return function (dispatch) {
            const name = document.getElementById("name")
            if (name.value !== "") {
                store.dispatch(addStudent())
                registerMyName(name.value)
                    .then(data => {
                        store.dispatch(addStudentSuccess(data.data[0].totalVisitors))
                        localStorage.setItem('visitors', JSON.stringify(data.data[0].totalVisitors))
                    })
                    .catch(error => {
                        store.dispatch(addStudentFailed(error))
                    })
            }
            else {
                alert("Enter Name")
            }
        }

    }

    return (
        <Fragment>
            <form className="form">
                <input type="text" id="name" placeholder="Your nice name"></input>
                <br />
                <button type="button" onClick={store.dispatch(addingStudend)}>Hit Me</button>
                <br />
                <p>Total Visits on this site: {totalVisit}</p>
            </form>
        </Fragment>
    )
}

export default Form