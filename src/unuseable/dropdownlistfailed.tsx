// import { useState } from "react"
// import classNames from "classnames";

// interface DropdownListItem {
//   label: string;
//   value: string;
// }

// interface DropdownListProps {
//   options: DropdownListItem[];
//   value: string;
//   onChange: (value: string) => void;
// }

// const DropdownList: React.FC<DropdownListProps> = ({ options, value, onChange }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleDrop = () => {
//     setIsVisible((prev) => !prev);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault()
//     onChange(event.target.value);
//   };

//   const dropdownItems = options.map((option) => (
//     <li
//       key={option.value}
//       className={classNames('dropdown-item', {
//         'active': option.value === value,
//       })}
//       onClick={() => handleChange({
//         target: {
//           value: option.value
//         }
//       } as React.ChangeEvent<HTMLInputElement>)}
//     >
//       {option.label}
//     </li>
//   ));

//   return (
//     <div className="dropdown">
//       <button
//         type="button"
//         className="dropdown-button"
//         onClick={handleDrop}
//         aria-expanded={isVisible}
//       >
//         {value}
//       </button>

//       <ul className="dropdown-menu" style={{ display: isVisible ? 'block' : 'none' }}>
//         {dropdownItems}
//       </ul>
//     </div>
//   );
// };

// export default DropdownList