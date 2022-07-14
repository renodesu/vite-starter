import { RecoilRoot } from 'recoil'
import './App.scss'
import Index from './Index'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Index />
      </div>
    </RecoilRoot>
  )
}

export default App
