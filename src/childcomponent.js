import React from 'react';

class ChildComponent extends React.Component {


    state = {
        showJobs: false,
    }

    handleShowJob = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {

        this.props.deleteJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false &&
                    <div >
                        <button onClick={() => this.handleShowJob()}>show</button>
                    </div>}
                <>
                    {showJobs &&
                        <div>
                            <div>
                                {arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={() => this.handleShowJob()}>hide</button>
                        </div>}
                </>
            </>
        )
    }
}








export default ChildComponent;


