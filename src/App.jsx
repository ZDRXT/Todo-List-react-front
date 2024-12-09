import Header from "./components/header/Header"
import HomePage from "./pages/homePage/HomePage"
import ProfilePage from "./pages/profilePage/profilePage"
import AuthPage from "./pages/authPage/AuthPage"
import Footer from "./components/footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App