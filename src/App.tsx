
import DropdownList from './components/DropdownList/DropdownList'
import Layout from './components/Layout/Layout'
import CalResult from './components/Wraper/CalResult'
import './globals.css'


const App = () => {

  return (
    <Layout>
      <CalResult />
      <DropdownList />
    </Layout>
  )
}

export default App