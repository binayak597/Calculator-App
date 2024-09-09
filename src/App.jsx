
import { useState } from 'react'
import './App.css'
import './styles/calculator.css'
import Header from './components/Header'
import Result from './components/Result'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
 
  const [result, setResult] = useState("0");

  const handleClick = (value) => {

    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        // If result is "0", replace it with the clicked number, otherwise append it to the result
        if (result === "0" && (value - 1 >= 0 && value - 1 <= 9) ) {
          setResult(value);
        } else if(result !== "0") setResult(result + value);


        break;
      case "=":
        // Evaluate the expression in the result and set the result state to the evaluated value
        setResult(eval(result));
        break;
      case "c":
        // Clear the result state
        setResult("0");
        break;
      case "+/-":
        // Change the sign of the result
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // Convert the result to a percentage
        if(result !== "0") setResult(parseFloat(result, 10) / 100);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <Result result={result} />
        <ButtonsContainer handleClick={handleClick} />
      </div>
    </>
  )
}

export default App
