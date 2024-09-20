type CheckboxProps = {
  id: string
  text: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  isDisabled?: boolean
  checkboxShape?: string
}

export default function Checkbox({
  id,
  text,
  onChange,
  checked,
  isDisabled,
  checkboxShape = "rounded-full",
}: CheckboxProps) {
  return (
    <div className="basis-3/4 flex flex-row leading-4">
      <input
        id={id}
        type="checkbox"
        name={id}
        onChange={onChange}
        checked={checked}
        disabled={isDisabled}
        className={`
        flex-none w-[17px] h-[17px]
        border border-gray-300 ${checkboxShape} 
        focus:outline-none
        ${checked ? "accent-red-500 checked" : "bg-white"}
        `}
      />
      <label htmlFor={id} className=" pl-2">
        {text}
      </label>
    </div>
  )
}
