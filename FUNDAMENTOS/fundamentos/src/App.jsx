import { useState } from 'react'
// components
import FirstComponent from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'

// styles /css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>oi</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
    </>
  )
}

export default App
