import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import CourseCategories from './components/courseCategoriesSection/courseCategories';
import Search from './components/nav-section/search';
import CardsMultiple from './components/cards/cardsMultiple';
import { useState } from 'react';
import './components/cards/card-style.css';


const CARDS = [
  { imgsrc: require('./assets/datascience.jpg').default, title: "Data Science" },
  { imgsrc: require('./assets/design.jpg').default, title: "Design" },
  { imgsrc: require("./assets/finance.jpg").default, title: "Finance" },
  { imgsrc: require("./assets/operation.jpg").default, title: "Operation" },
  { imgsrc: require("./assets/softwaredev.jpg").default, title: "Software Development" },
  { imgsrc: require("./assets/datascience.jpg").default, title: "Data Science" },
  { imgsrc: require("./assets/design.jpg").default, title: "Design" },
  { imgsrc: require("./assets/finance.jpg").default, title: "Finance" },
  { imgsrc: require("./assets/operation.jpg").default, title: "Operation" },
  { imgsrc: require("./assets/softwaredev.jpg").default, title: "Software Development" },
  { imgsrc: require("./assets/design.jpg").default, title: "Design" },
  { imgsrc: require("./assets/finance.jpg").default, title: "Finance" },

];


const App = () => {

  const [filteredCards, setFilteredCards] = useState(CARDS);
  const filterCards = (val, type) => {
    console.log(val);
    console.log(filteredCards.length, CARDS.length);
    if (type === 'search') {
      if (val) {
        setFilteredCards(
          CARDS.filter(element => {
            if (element.title.toLowerCase().includes(val.toLowerCase())) {
              return element
            }
          })
        )
      } else {
        setFilteredCards(
          CARDS.filter(element => {
            return element
          })
        )
      }
    } else {
      if (val && filteredCards.length === CARDS.length) {
        setFilteredCards(
          CARDS.filter(element => {
            if (element.title.toLowerCase().includes(val.toLowerCase())) {
              return element
            }
          })
        )
      } else {
        setFilteredCards(
          CARDS.filter(element => {
            return element
          })
        )
      }
    }

  }

  return (
    <Router>
      <div className="App container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <CourseCategories filteredCards={filteredCards} setFilteredCards={filterCards} />
          </div>
          <div className="col-md-9 col-sm-8" >
            <Search filteredCards={filteredCards} setFilteredCards={filterCards} />
            <CardsMultiple filteredCards={filteredCards} setFilteredCards={filterCards} />
          </div>
        </div>
      </div>
    </Router>
  )
}


export default App;
