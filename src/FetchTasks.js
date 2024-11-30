import axios from 'axios';

const BASE_URL = "http://localhost:4000/api";

const getAllTasks = (setTasks, date) => {
    axios.get(`${BASE_URL}/tasks`, { params: { date } })
    .then(({  data }) => {
        console.log(data);
        setTasks(data);
    });
};

const addTask = (title, date, setTitle, setTasks ) => {
    axios.post(`${BASE_URL}/tasks`, { title, date })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllTasks(setTasks, date);
    });
};

const editTask = (taskId, title, date, setTitle, setTasks, setEditing) => {
    axios.put(`${BASE_URL}/tasks`, {_id: taskId, title, date})
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllTasks(setTasks, date);
    });
};

const deleteTask = (_id, setTasks, date) => {
    axios.delete(`${BASE_URL}/tasks`, { data: { _id } })
    .then((data) => {
        console.log(data);
        getAllTasks(setTasks, date);
    });
};

export { getAllTasks, addTask, editTask, deleteTask };