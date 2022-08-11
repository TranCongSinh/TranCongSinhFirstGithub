import React from "react";

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleAddTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickTodo = () => {
        if (!this.state.title) {
            alert('missing alert');
            return;
        }

        this.props.AddListTodo({
            id: Math.floor(Math.random() * 1230),
            title: this.state.title,
        })


    }

    render() {
        let { title } = this.state;

        return (
            <div className="one">
                <input
                    type='text'
                    value={title}
                    onChange={(event) => this.handleAddTodo(event)}
                />
                <button
                    style={{ margin: '0 10px' }}
                    onClick={() => this.handleClickTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;

