// Components
import { useEffect } from 'react'
import { Home } from './components/pages/Home'
// Redux
import { useDispatch } from 'react-redux'
import { initalState } from './redux/actions/dataStateAction'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initalState())
  }, [])
  return (
    <>
       <Home />
    </>
  )
}
export default App
