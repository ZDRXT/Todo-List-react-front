import "./TodoApp.scss"
import Button from "../../../components/button/Button"

const TodoApp = () => {
	return (
		<section className="todo-app">
			<div className="container">
				<h1>
					todo-app
				</h1>
				<Button text={"Add Todo"} style={{ background: "lightgreen" }} message={"Hello From Home"}></Button>
			</div>
		</section>
	)
}

export default TodoApp