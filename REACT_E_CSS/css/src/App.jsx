import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {

  const n = 15;

  const redTitle = false

  return (
    <div>
      {/* CSS global */}
      <h1>react com css</h1>

      {/* CSS componente */}
      <MyComponent />
      <p>Este paragrafo é do app.js</p>

      {/* css inline dinamico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>CSS dinamico</h2>

      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>

      {/* css modeles */}
      <Title/>
    </div>
  )
}

export default App
