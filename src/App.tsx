import { RecoilRoot } from 'recoil'
// import './App.scss'
import Index from './Index'
import Typography from './Typography'

function App() {
  return (
    <RecoilRoot>
      <div className="p-4">
        <Index />
        <Typography />
      </div>
    </RecoilRoot>
  )
}

export default App
