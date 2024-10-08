import Button from './components/texto/texto'
import './App.css'
import Label from './components/button/button'

function App() {

  return (
    <>
      <div>
        <Button>
          <h3>Clique aqui para gerar texto</h3>
        </Button>

        <Label label='BAIXAR CV'/>
      </div>
    </>
  )
}

export default App
