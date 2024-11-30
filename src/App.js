import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getAllTasks, addTask, editTask, deleteTask } from "./FetchTasks";
import { MyTasks } from './MyTasks';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [taskId, setTaskId] = useState("");

  useEffect(() => {
      // Format date to YYYY-MM-DD
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      getAllTasks(setTasks, formattedDate);
  }, [selectedDate]);

  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <div className="App">
      <div>
      <h1>2024</h1>
      <Calendar className="calendar"  value={selectedDate} onChange={handleDateChange} />
<div className="center">
<input
  type="text"
  placeholder="Add a task"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
<button className="btn"
  disabled={!title}
  onClick={
    editing
      ? () => editTask(taskId, title, selectedDate, setTitle, setTasks, setEditing)
      : () => addTask(title, selectedDate, setTitle, setTasks)
  }
>
  {editing ? "Edit" : "Add"}
</button>
</div>

      </div>
    

      {tasks && tasks.map((task) => (
        <MyTasks
          text={task.title}
          key={task._id}
          updatingInInput={() => {
            setEditing(true);
            setTitle(task.title);
            setTaskId(task._id);
          }}
          deleteTask={() => deleteTask(task._id, setTasks, selectedDate)}
        />
      ))}
    </div>
  );
}

export default App;