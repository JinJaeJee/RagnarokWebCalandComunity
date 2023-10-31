

import DropdownList from './components/DropdownList/DropdownList'
import Layout from './components/Layout/Layout'

import './globals.css'


const App = () => {

  return (
    <Layout>
      <DropdownList label='Hat' options={[{value: 'Rideword Hat'}]}/>
      <DropdownList label='Middle' options={[{value: 'Eye Patched'}]}/>
      <DropdownList label='Lower' options={[{value: 'Mob scarf'}]}/>
      <DropdownList label='Weapon' options={[{value: 'Blade Katar'}]}/>
      <DropdownList label='Armor' options={[{value: 'Illusion Armor A'}]}/>
      <DropdownList label='Garment' options={[{value: 'Illusion Wing A'}]}/>
      <DropdownList label='Boots' options={[{value: 'Illusion Shoes A'}]}/>
      <DropdownList label='Acc.L ' options={[{value: 'Illusion Booster L'}]}/>
      <DropdownList label='Acc.R ' options={[{value: 'Illusion Booster R'}]}/>
    </Layout>
  )
}

export default App