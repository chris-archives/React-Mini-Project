function TodoForm() {
    return (
        <form className="TodoForm">
          <input type="text" className="TodoInput" placeholder="What is the task today?"/>
          <button type="submit" className="AddButton">Add Tasks</button>
        </form>
    );
}

export default TodoForm;
