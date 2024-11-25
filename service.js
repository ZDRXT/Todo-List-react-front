let url = "http://localhost:5001"

let currTodo = {
    author: "",
    text: "",
    title: "",
    complete: false
}

async function addNewTodo(newTodo) {
    let res = await fetch (url + "/todos", {
        method: "POST",
        headers: {
            "Content-Type" : "Application/json"
        },
        body: JSON.stringify(newTodo)
    })

    let data = await res.json()
    return data
}

addNewTodo(currTodo).then(data => console.log(data))