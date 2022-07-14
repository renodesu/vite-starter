import { useRecoilState } from 'recoil'
import { counterState } from './state/state'

const Index = () => {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <div>
      <h1>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </h1>
    </div>
  )
}

export default Index
