
interface IOption {
  value : string
  str: string
}


interface IDropDownProps {
  label? : string
  options : IOption[]
  

}


const DropdownList = (props : IDropDownProps) => {
  const { label , options } = props
  return (
    <div className="flex gap-2.5 w-60 mb-2 mt-2 ml-4">
      <label className="border-2 border-indigo-600 w-1/3">{label}</label>
        <select className="w-2/3">
          <option >Select {label}</option>
          {options.map((option: IOption) => {
            return <option>{option.value}</option>
          })}
        </select>

    </div>
  )
}

export default DropdownList