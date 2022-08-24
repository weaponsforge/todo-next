import Counter from '@/components/counter'

import { useDispatch } from 'react-redux'
import { decrement, increment } from '@/store/counter/counterSlice'

function CounterContainer () {
  const dispatch = useDispatch()

  return (
    <Counter
      handleIncrement={() => dispatch(increment())}
      handleDecrement={() => dispatch(decrement())}
    />
  )
}

export default CounterContainer
