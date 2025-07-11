import { Outlet } from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"

const data = {
    "size": {"xs": "Mini, 17 sm", "sm": "Kiçik, 23 sm", "md": "Orta, 30 sm", "lg": "Böyük, 35 sm", "xl": "Extra Böyük, 40 sm"},
    "pizza": [
        { "name": "Çiken Ranç", "img": "cikenRanc.jpg", "price": {"xs": 6, "sm": 11, "md": 17, "lg": 22}, "desc": "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella" },
        { "name": "Margarita", "img": "margarita.jpg", "price": {"xs": 6, "sm": 8, "md": 13, "lg": 16}, "desc": "Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano" },
        { "name": "4 Pendir", "img": "4pendir.jpg", "price": {"sm": 11, "md": 16, "lg": 22}, "desc": "Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar pendirləri" },
        { "name": "Qarışıq ət", "img": "qarisiqEt.jpg", "price": {"sm": 14, "md": 22, "lg": 29}, "desc": "Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella" },
        { "name": "NY Style Pizza Pepperoni", "img": "NYpizzaPipperoni.jpg", "price": {"xl": 23}, "desc": "Pizza sousu, Pepperoni, Mozzarella" }
    ]
}

function App() {
    return (
        <>
            <Header />
            <main>
                <Container className="p-5">
                    <Outlet context={data} /> 
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App
