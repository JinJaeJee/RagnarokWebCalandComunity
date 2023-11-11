

import DropdownList from './components/DropdownList/DropdownList'
import Layout from './components/Layout/Layout'

import './globals.css'


const App = () => {

  return (
    <Layout>
      <DropdownList label='Hat' options={[{value: 'Rideword Hat', str: "10"}]}/>
      <DropdownList label='Middle' options={[{value: 'Eye Patched', str: "10"}]}/>
      <DropdownList label='Lower' options={[{value: 'Mob scarf', str: "10"}]}/>
      <DropdownList label='Weapon' options={[{value: 'Blade Katar', str: "10"}]}/>
      <DropdownList label='Armor' options={[{value: 'Illusion Armor A', str: "10"}]}/>
      <DropdownList label='Garment' options={[{value: 'Illusion Wing A', str: "10"}]}/>
      <DropdownList label='Boots' options={[{value: 'Illusion Shoes A', str: "10"}]}/>
      <DropdownList label='Acc.L ' options={[{value: 'Illusion Booster L', str: "10"}]}/>
      <DropdownList label='Acc.R ' options={[{value: 'Illusion Booster R', str: "10"}]}/>
    </Layout>
  )
}

export default App