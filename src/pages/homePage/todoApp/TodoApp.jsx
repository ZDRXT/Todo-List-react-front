import "./TodoApp.scss"
import Button from "../../../components/button/Button"

const TodoApp = () => {
    return (
        <section className="todo-app">
            <div className="container">
                <h1>
                    todo-app

                    <button text={"Add Todo"} style={{background: "lightgreen"}} message={"Hello From Home"}></button>
                </h1>
            </div>
        </section>
    )
}

export default TodoApp