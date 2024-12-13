const BASE_URL = "http://localhost:5001"

async function registerUser(userInfo) {
    try {
        let res = await fetch(BASE_URL + "/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "abcd1234"
            },
            body: JSON.stringify(userInfo)
        })

        if (!res.ok) throw "Some error"

        let data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function loginUser(userInfo) {
    try {
        let res = await fetch(BASE_URL + "/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "abcd1234"
            },
            body: JSON.stringify(userInfo)
        })
        if (!res.ok) throw "Some error"

        let data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function verifUser() {
    try {
        let token = localStorage.getItem("token")

        if (!token) throw "Token is undefiend!"

        let res = await fetch(BASE_URL + "/user/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "abcd1234",
                "Authorization": `Buarer ${token}`
            }
        })

        if (!res.ok) throw "Some error"

        let data = await res.json()
        
        return data
    } catch (error) {
        throw error
    }
}


export { registerUser, loginUser, verifUser}