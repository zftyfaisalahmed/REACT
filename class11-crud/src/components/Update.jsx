import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readSingleTask, updateTask } from '../data/task';

const Update = () => {

    const [task , setTask] = useState({
        title : '',
        start : '',
        end : '',
        desc : ''
    })

    const params = useParams();
    //console.log('params', params.id)

    useEffect(() => {
        const data = readSingleTask(params.id)
        console.log(data)
        setTask(data);
    }, [])
    
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("Update task", task)
        //createTask(task);
        updateTask(params.id, task)
        // const createTask = async (task) => {
        //     console.log("task.js : ", task)
        // };
    }

    const readValue = (event) => {
        const { name, value } = event.target;
        // console.log("name :", name, "value", value)
        setTask({...task, [name]:value});
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h3 className="display-3 text-dark text-center">
                    Update
                </h3>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                <div className='card'>
                    <div className="card-body">
                        <form action="" onSubmit={submitHandler}>
                            <div className="form-control">
                                <label htmlFor="title">
                                    Task Title
                                </label>
                                <input type="text" name="title" id="title" className='form-control' required value={task.title} onChange={readValue}/>
                            </div>
                            <div className="form-control my-3">
                                <label htmlFor="start">
                                    Task Start Date
                                </label>
                                <input type="datetime-local" name="start" id="start" className='form-control' required value={task.start} onChange={readValue}/>
                            </div>
                            <div className="form-control my-3">
                                <label htmlFor="end">
                                    Task End Date
                                </label>
                                <input type="datetime-local" name="end" id="end" className='form-control' required value={task.end} onChange={readValue}/>
                            </div>
                            <div className="form-control my-3">
                                <label htmlFor="desc">
                                    Description
                                </label>
                                <textarea name="desc" id="desc" cols="30" rows="5" className='form-control' required value={task.desc} onChange={readValue}></textarea>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Update Task" className='btn btn-outline-success'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update