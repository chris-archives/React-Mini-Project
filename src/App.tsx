import './App.css'
import TodoWrapper from "./Components/todoWrapper.tsx";

function App() {
  return (
    <>
      <div className="App">
        <h1>Today's Tasks 📗</h1>
        <TodoWrapper></TodoWrapper>
      </div>
    </>
  )
}

export default App
