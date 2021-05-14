import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import CourseCategories from './components/courseCategoriesSection/courseCategories';
import Search from './components/nav-section/search';
import CardsMultiple from './components/cards/cardsMultiple';
import {useState} from 'react';
import './components/cards/card-style.css';
import CheckBox from './components/courseCategoriesSection/courseCategories';


const CARDS = [
              {imgsrc: require('./assets/datascience.jpg').default, title:"Data Science"}, 
              {imgsrc: require('./assets/design.jpg').default, title:"Design"}, 
              {imgsrc: require("./assets/finance.jpg").default,title:"Finance"},
              {imgsrc: require("./assets/operation.jpg").default, title:"Operation"}, 
              {imgsrc: require("./assets/softwaredev.jpg").default,title:"Software Development"}, 
              {imgsrc: require("./assets/datascience.jpg").default,title:"Data Science"}, 
              {imgsrc: require("./assets/design.jpg").default,title:"Design"}, 
              {imgsrc: require("./assets/finance.jpg").default,title:"Finance"},
              {imgsrc: require("./assets/operation.jpg").default, title:"Operation"}, 
              {imgsrc: require("./assets/softwaredev.jpg").default,title:"Software Development"},
              {imgsrc: require("./assets/design.jpg").default,title:"Design"},
              {imgsrc: require("./assets/finance.jpg").default,title:"Finance"},

              ];


const App=()=> {

  const [filteredCards, setFilteredCards] = useState(CARDS);
   const filterCards=(val)=>{
      console.log(filteredCards);
      setFilteredCards(
          CARDS.filter(element => {
              if (val == "") {
                  return element
              } else if (element.title.toLowerCase().includes(val.toLowerCase())) {
                  return element
              }
          })
      )
  }




  return (
    <Router>
      <div className="App container">
        <div className="row">
          <div className="col-3">
            <CourseCategories filteredCards = {filteredCards} setFilteredCards={filterCards} />
          </div>
          <div className="col-9" >
              <Search filteredCards={filteredCards} setFilteredCards={filterCards}/>
              <CardsMultiple filteredCards = {filteredCards} setFilteredCards={filterCards} />
          </div>
        </div>
      </div>
    </Router>
  )
}


export default App;
