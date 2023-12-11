import { toast } from 'react-toastify';

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const ranId = () => {
    return Math.floor(Math.random() * 1000)
}

// Store the task
const createTask = async (task) => {
    // console.log("task.js : ", task)

    try {
        const extTask = tasks.find((item) => item.title === task.title);

        if (extTask) {
            toast.warning(`Task already exists`)
        } else {
            const newTask = {
                id : ranId(),
                ...task
            };
        
            tasks.push(newTask)
            saveTask(tasks)
            toast.success("New Task Updated")
            window.location.href = "/"
        }
        
    } catch (error) {
        toast.error(error.message)
    }
};

// save the task
const saveTask = (data) => {
    localStorage.setItem("task" , JSON.stringify(data))
}

// getAll Data
const readAllTask = () => {
    return tasks;
}

// delete single task
const deleteTask = async (id) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id === id)
        tasks.splice(taskIndex, 1);
        saveTask(tasks)
        toast.success(`${id} Deleted Successfully`)
        window.location.href = '/';
    } catch (error) {
        toast.error(error.message)
    }
}

// get single data
const readSingleTask = (id) => {
    const data = tasks.find((item) => item.id == id);
    return data
}

// update task
const updateTask = (id, task) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id)
        tasks.splice(taskIndex, 1, task)
        saveTask(tasks)
        toast.success("Updated successfully")
        window.location.href  = '/'
    } catch (error) {
        toast.error(error.message)
    }
}

export { createTask, readAllTask, deleteTask, readSingleTask, updateTask };


/* import { toast } from "react-toastify";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// console.log("TASK ARRAY = ",tasks);

// RAND ID() Generator
 const randId = () => {
    return Math.floor(Math.random()*1000);
 }
// console.log("Rand ID" , randTd());



// Save the Task
const saveTask = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
}

// Store the tasks
const createTask = async (task) => {
    // console.log("TASK.JS = ", task);

    try {
        const extTask = tasks.find((item)=>item.title === task.title);
        
        if (extTask) {
            toast.warning('Task is already exists')
        } else {
            const newTask = {
                id: randId(),
                ...task,
            };
            tasks.push(newTask);
            saveTask(tasks);
            toast.success("New task created successfully");
            window.location.href = "/";
        }
        }
        catch (error) {
        toast.error(error.message);
    }
}


//  getAll Data
const readAllTask = () => {
    return tasks;
};

// Update a task
// const updateTask = async (id, data) => {
//     let index = tasks.findIndex((item) => item.id == id);
//     tasks[index] = data;
//     saveTask(tasks);
//     toast.info(${data.title} updated);
//     window.location.href = "/";
//     };

// Delete a single task
const deleteTask = async (id) => {
    try {
        const taskindex = tasks.findIndex((item) => item.id === id);
        tasks.splice(taskindex, 1);
        saveTask(tasks);
        toast.success(`${id} Delete successfully`);
        window.location.href = "/";
        

    } catch (error) {
        toast.error(error.message);
    }
};


// get single data
const readSingleTask = (id) => {
    const data = tasks.find((item) => item.id == id);
    return data
}

// update rask
const updateTask = (id, task) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id)
        tasks.splice(taskIndex, 1, task)
        saveTask(tasks)
        toast.success("Updated successfully")
        window.location.href  = '/'
    } catch (error) {
        toast.error(error.message)
    }
}
export {createTask, readAllTask, deleteTask, readSingleTask, updateTask}; */
