import "./Button.scss"

const Button = ({ text, style, message }) => {
	function showMessage() {
		window.alert(message)
	}

	return (
		<button onClick={showMessage} className="button" style={style ? style : null}>{text}</button>
	)
}

export default Button