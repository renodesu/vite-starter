import { useRecoilState } from 'recoil'

import { counterState } from './state/state'

const Index = () => {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default Index
