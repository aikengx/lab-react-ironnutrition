import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'


class App extends Component {

  state = {
    foods: foods,
    clicked: false
  }

  showFoods = () => {
    let foodList = this.state.foods.map((food, i) => {
      return (
      <div className="box" key={i}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              {/*<img src="https://i.imgur.com/eTmWoAN.png" alt="" />*/}
              <img src={food.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                {/*<strong>Pizza</strong> <br />*/}
                <strong>{food.name}</strong> <br />
                {/*<small>400 cal</small>*/}
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div> 
    )  
    });
    return (foodList);
  }

  addFood = () => {
    console.log("Adding food!");
    this.setState({
      clicked:!this.state.clicked
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.addFood} className="button is-info">Add Food</button>
        </div>

        {this.showFoods()}


      {/*
                <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src="https://i.imgur.com/eTmWoAN.png" alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Pizza</strong> <br />
                  <small>400 cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value="1"
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
      </div>*/}
      </div>
    );
  }
}

export default App;
