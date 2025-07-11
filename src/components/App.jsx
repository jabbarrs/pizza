import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"

function App() {
    return (
        <>
            <Header />
            <main>
                <Container className="p-5">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App
