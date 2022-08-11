import React from 'react';
import ChildComponent from './childcomponent';
import AddComponent from './Newchildcomponent';
import ListTodo from './todos/ListTodo';



class MyComponent extends React.Component {



  state = {

    arrJobs: [
      { title: 'developer', id: '1', salary: '500$' },
      { title: 'tester', id: '2', salary: '400$' },
      { title: 'manager', id: '3', salary: '2000$' },
    ]
  }

  addNewJob = (job) => {

    let currenJob = this.state.arrJobs;
    currenJob.push(job);

    this.setState({
      arrJobs: currenJob
    })
  }

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id)
    this.setState({
      arrJobs: currentJobs
    })
  }

  render() {

    return (

      <>
        {/* <AddComponent
          addNewJob={this.addNewJob}
        />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJob={this.deleteJob}
        /> */}

        <ListTodo />
      </>


    )
  }



}

export default MyComponent;


















