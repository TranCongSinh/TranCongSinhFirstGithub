import React from "react";
class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: ''
    }

    HandleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value

        })
    }
    HandleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    HandleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.titleJob || !this.state.salary) {
            alert('xin điển vào chỗ trống')
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1230),
            title: this.state.titleJob,
            salary: this.state.salary
        })


    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Title Job:</label><br />
                    <input
                        type="text"
                        defaultValue={this.state.titleJob}
                        onChange={(event) => this.HandleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        defaultValue={this.state.salary}
                        onChange={(event) => this.HandleChangeSalary(event)}
                    /><br />
                    <input
                        type="submit"
                        value='submit'
                        onClick={(event) => this.HandleSubmit(event)}
                    />
                </form>
            </>
        )
    }

}

export default AddComponent;