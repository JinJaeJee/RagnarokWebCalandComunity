
interface IOption {
  value : string
}


interface IDropDownProps {
  label? : string
  options : IOption[]

}


const DropdownList = (props : IDropDownProps) => {
  const { label , options } = props
  return (
    <div className="flex gap-2.5 w-52 mb-2 mt-2 ml-4">
      <label className="">{label}</label>
        <select>
          <option className="">Select {label}</option>
          {options.map((option: IOption) => {
            return <option>{option.value}</option>
          })}
        </select>

    </div>
  )
}

export default DropdownList