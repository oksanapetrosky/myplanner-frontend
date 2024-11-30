import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

export const MyTasks = ({ text, updatingInInput, deleteTask }) => {
    return ( <div className="task">
        <p>{text}</p>
        <CiEdit onClick={updatingInInput}></CiEdit>
        <MdOutlineDelete onClick={deleteTask}></MdOutlineDelete>
    </div>)
}