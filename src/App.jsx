
import './App.css'
import Counter from './counter'
import Users from './Users'

function App() {
  function handleClick(){
    alert("button clicked")
  }

  const handleClick2 = () =>{
    alert("button 2 is clicked")
  }

  const handleClick4 = (numbers) => {
    alert(numbers+5);

  }
  

  return (
    <>
      
      <h3> React core concept 2</h3>
      <Counter></Counter>
      <Users></Users>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {
        alert("third is clicked")
      }}>third</button>
      {/* vejailla  */}
      <button onClick={() =>{
        handleClick4(3)
      }}>Four</button>
     
    
    </>
  )
}

export default App
