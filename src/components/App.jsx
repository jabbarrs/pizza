import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Basket from "./Basket";

let data = {
  size: {
    xs: "Mini, 17 sm",
    sm: "Kiçik, 23 sm",
    md: "Orta, 30 sm",
    lg: "Böyük, 35 sm",
    xl: "Extra Böyük, 40 sm",
  },
  pizza: [
    {"id": 1, "name": "Çiken Ranç", "img": "cikenRanc.jpg", "prop": ["chick"], "price": {"xs": 6, "sm": 11, "md": 17, "lg": 22}, "desc": "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella"},
    {"id": 2, "name": "Marqarita", "img": "margarita.jpg", "prop": ["vegan"], "price": {"xs": 6, "sm": 8, "md": 13, "lg": 16}, "desc": "Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano"},
    {"id": 3, "name": "4 Pendir", "img": "4pendir.jpg", "prop": ["vegan"], "price": {"sm": 11, "md": 16, "lg": 22}, "desc": "Pizza sousu, Mozzarella, Feta, Parmezan və Cheddar pendirləri"},
    {"id": 4, "name": "Qarışıq ət", "img": "qarisiqEt.jpg", "prop": ["meat"], "price": {"sm": 14, "md": 22, "lg": 29}, "desc": "Pizza sousu, Mal Əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella"},
    {"id": 5, "name": "NY pizza pepperoni", "img": "NYpizzaPipperoni.jpg", "prop": ["meat"], "price": {"xl": 23}, "desc": "Pizza sousu, Pepperoni, Mozzarella"},
    {"id": 6, "name": "NY pizza margarita", "img": "NYpizzaMargarita.jpg", "prop": ["vegan"], "price": {"xl": 20}, "desc": "Pizza sousu, Mozarella, Pomidor, Oreqano"},
    {"id": 7, "name": "Papa Miks", "img": "papaMix.jpg", "prop": ["chick", "meat", "spicy"], "price": {"lg": 20}, "desc": "Çiken Barbekyu, Hot & Spaysi, Marqarita, Klassik Pepperoni"},
    {"id": 8, "name": "Qarışıq Ət BBQ", "img": "qarisiqEtBBQ.jpg", "prop": ["meat"], "price": {"sm": 16, "md": 24, "lg": 29}, "desc": "BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella"},
    {"id": 9, "name": "Amerikan Hot", "img": "americanHot.jpg", "prop": ["meat", "spicy"], "price": {"xs": 6, "sm": 9, "md": 14, "lg": 19}, "desc": "Pizza sousu, Mozzarella pendiri, Pepperoni, Halapeno Bibəri"},
    {"id": 10, "name": "Karnaval", "img": "karnaval.jpg", "prop": ["meat"], "price": {"sm": 10, "md": 15, "lg": 20}, "desc": "Pizza Sous, Göbələk, Qara Zeytun, Pepperoni, Mozzarella"},
    {"id": 11, "name": "Cheddar Ciken Club", "img": "cheddarChickenClub.jpg", "prop": ["chick", "meat"], "price": {"sm": 11, "md": 18, "lg": 22}, "desc": "Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu"},
    {"id": 12, "name": "Cheddar Dabl Burger", "img": "cheddarDablBurger.jpg", "prop": ["meat"], "price": {"sm": 13, "md": 20, "lg": 25}, "desc": "1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar"},
    {"id": 13, "name": "Çiken Barbekyu", "img": "chickenBarbeku.jpg", "prop": ["chick"], "price": {"xs":6,"sm": 10, "md": 16, "lg": 22}, "desc": "Pizza Sousu, Qril Toyuğu, Göbələk, Mozzarella, Barbekyu Sousu"},
    {"id": 14, "name": "Çiken Baffalo", "img": "cikenBaffalo.jpg", "prop": ["chick", "meat"], "price": {"sm": 12, "md": 18, "lg": 24}, "desc": "Ranç Sousu, Çiken poppers, Vetçina, Mozzarella, Baffalo Sousu"},
    {"id": 15, "name": "Çiken Çizburger", "img": "cikenCizburger.jpg", "prop": ["chick"], "price": {"sm": 12, "md": 19, "lg": 24}, "desc": "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarella"},],
};

const arr = [
  { id: 4, size: "md", quant: 2 },
  { id: 6, size: "xl", quant: 1 },
  { id: 4, size: "lg", quant: 1 },
];

function App() {
  const [basket, setBasket] = useState(arr);
  const [show, setShow] = useState(false);

  function add2Basket(id, size, quant) {
    let index = basket.findIndex((item) => item.id == id && item.size == size);
    if (index >= 0) updateBasket(index, basket[index].quant + quant);
    else {
      setBasket([...basket, { id, size, quant }]);
      setShow(true);
    }
  };

  function deleteFromBasket(ind) {
    setBasket(basket.filter((_, i) => i != ind));
  };

  function updateBasket(ind, quant) {
    if (quant == 0) deleteFromBasket(ind);
    else {
      setBasket(
        basket.map((item, i) => (ind == i ? { ...item, quant: quant } : item))
      );
    };
  };

  return (
    <>
      <Header basket={basket} setShow={setShow} />
      <main>
        <Container className="p-5 mt-5">
          <Outlet context={{ data, add2Basket }} />
        </Container>
      </main>
      <Footer />

      <Basket
        pizza={data.pizza}
        basket={basket}
        show={show}
        onHide={() => setShow(false)}
        deleteFromBasket={deleteFromBasket}
        updateBasket={updateBasket}
      />
    </>
  );
}

export default App;
