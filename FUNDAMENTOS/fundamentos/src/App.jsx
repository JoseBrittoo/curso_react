import { useState } from 'react'
// components
import FirstComponent from './components/FirstComponents';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

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
      <Events/>
      <Challenge/>
    </>
  )
}

export default App
