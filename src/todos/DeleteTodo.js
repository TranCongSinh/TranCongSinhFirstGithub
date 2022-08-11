
import React from "react";


class Delete extends React.Component {


    render() {

        let { todoJobs } = this.props;

        return (
            <div className="two">
                {todoJobs.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.id} - {item.title}
                            <button
                                style={{ margin: '0 10px' }}

                            >add</button>
                            <button>delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Delete;
