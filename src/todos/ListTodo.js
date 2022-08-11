
import React from "react";
import AddTodo from './AddTodo'
import Delete from "./DeleteTodo";

class ListTodo extends React.Component {

    state = {

        todoJobs: [
            { title: 'Doing homework', id: '1', salary: '500$' },
            { title: 'Making videos', id: '2', salary: '400$' },
            { title: 'Fixing bugs', id: '3', salary: '2000$' },
        ]
    }

    AddListTodo = (todo) => {

        this.setState({
            todoJobs: [...this.state.todoJobs, todo]
        })


    }

    render() {

        return (
            <div className="app-todo" style={{ textAlign: 'center', paddingTop: '50px' }}>

                <AddTodo
                    AddListTodo={this.AddListTodo}
                />

                <Delete
                    todoJobs={this.state.todoJobs}
                />

            </div>
        )
    }
}



export default ListTodo;

