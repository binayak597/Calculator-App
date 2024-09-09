

const Button = ({className="", clickedNumber, value, content}) => {
  return (
    <button
    className={className}
    onClick={clickedNumber}
    value={value}
    >
    {content}
    </button>
  )
}

export default Button