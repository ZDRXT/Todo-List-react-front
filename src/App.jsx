import Header from "./components/header/Header"
import HomePage from "./pages/homePage/HomePage"
import ProfilePage from "./pages/profilePage/ProfilePage"
import AuthPage from "./pages/authPage/AuthPage"
import Footer from "./components/footer/Footer"
import { useState } from "react"
import { verifUser } from "./api/users-service"
import { BrowserRouter, Routes, Route, data } from "react-router-dom"
import { useEffect } from "react"

const App = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		verifUser()
			.then(data => {
				setUser(data.user)
			}).catch(() => {
				localStorage.clear()
				setUser(null)
			})
	}, [])

	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage user={user} />} />
				<Route path="/auth" element={<AuthPage setUser={setUser}/>} />
			</Routes>

			<Footer />
		</BrowserRouter>
	)
}

export default App