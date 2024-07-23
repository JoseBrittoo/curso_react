import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{ name:"Josias", email:"josias@gmailcom" }}/>
      </div>
    </>
  )
}

export default App
