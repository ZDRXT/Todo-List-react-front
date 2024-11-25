import Header from "./components/Header/Header"

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