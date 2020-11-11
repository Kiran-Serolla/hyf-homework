import React,{ useState } from 'react'

const toDos = [
    {
        id: 1,
        description : "Finish Homework",
    },
    {
        id: 2,
        description : "Buy Grocceries",
    },
    {
        id : 3,
        description: "Pickup Kids",
    },
    {
        id : 4,
        description : "Do the dishes"
    }
]
const ToDoList = ()=> {
    const [todo,setTodo] = useState([]);

    const addTodo = () =>{
        const randomTodo = toDos[Math.floor(Math.random()*toDos.length)];
        const newTodos = todo.concat(randomTodo)
        setTodo(newTodos);
    };

    const showList = (props) =>{
        const{todoitems} = props;
        const onDelete = (id) =>{
            const deleteTodo = todo.filter((todos)=>{
                return todos.id !==id;
            })
            .map((e) =>{
                return e
            });
            return setTodo(deleteTodo);
        };
    }
    const [isChecked,setIschecked] = useState(false);
    const isDone = (id)=>{
        todo.map((todo)=>{
            if (todo.id ==id){
                todo.DoIsDone = !todo.DoIsDone;
                setIschecked(todo.DoIsDone)
            }
        })
    }
    return (
        <div>
            {todoitems.map((item)=>{
                return(
                    <div>
                        <ul>
                            <li className={item.DoIsDone ? "DoIsDone":""}>
                                {item.description}</li>
                        </ul>
                        <input type= "checkbox" onChange={()=>isDone(item.id)}></input>
                        <button onClick={()=>onDelete(item.id)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
};
return (
    <div className = "list">
        <div>
            <button className= "addTodo" onClick= {addTodo}>Add</button>
        </div>
        <div>
            <showList todoitems = {todo}/>
        </div>

    </div>
);
}
export default ToDoList
