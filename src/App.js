import { useState } from 'react'
import styles from './App.module.css'

export function App() {
  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState(null)
  const [resultOnDisplay, setResultOnDisplay] = useState(false)

  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const handleNumClick = (num) => {
    if (resultOnDisplay) {
      setOperand1(num)
      setOperand2('')
      setOperator('')
      setResultOnDisplay(false)
    } else if (operator) {
      setOperand2(operand2 + num)
    } else {
      setOperand1(operand1 + num)
    }
  }

  const handleOperatorClick = (op) => {
    if (op === 'C') {
      setOperand1('')
      setOperand2('')
      setOperator('')
      setResult(null)
      setResultOnDisplay(false)
    } else {
      if (operand1 === '') {
        setOperand1('0')
      }
      setOperator(op)
    }
  }

  const handleResult = () => {
    if (operand1 && operator && operand2) {
      let res
      if (operator === '+') {
        res = Number(operand1) + Number(operand2)
      } else if (operator === '-') {
        res = Number(operand1) - Number(operand2)
      }
      setResult(res)
      setResultOnDisplay(true)
    }
  }

  return (
    <div className={styles.calculator}>
      <h1>Калькулятор</h1>
      <div
        className={styles.display}
        style={{ color: resultOnDisplay ? 'green' : 'black' }}
      >
        {resultOnDisplay ? result : `${operand1} ${operator} ${operand2}`}
      </div>
      <div className={styles.buttons}>
        {NUMS.map((num) => {
          return (
            <button key={num} onClick={() => handleNumClick(num)}>
              {num}
            </button>
          )
        })}
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={handleResult}>=</button>
        <button onClick={() => handleOperatorClick('C')}>C</button>
      </div>
    </div>
  )
}
