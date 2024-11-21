import './TodoItem.css'

function TodoItem({todo, onChange, onDelete}){
    return (
        <div className='todoItem'>
            <label>
                <div>
                    <input  type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                            ...todo,
                            isCompleted: e.target.checked
                    })
                    }}/>
                    <span>{todo.text}</span>
                </div>
                <div>
                    <button onClick={() => {
                        onDelete(todo);
                    }}>X</button>
                </div>
            </label>
        </div>
    )
}

export default TodoItem;