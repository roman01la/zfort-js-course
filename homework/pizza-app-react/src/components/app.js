import React, { Component } from 'react';
import Basket from './basket/basket';
import Viewport from './viewport/viewport';
import IngredientsSelector from './ingredients_selector/selector';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pizza: {},
      ingredients: [],
      error: undefined,

      pizzas: [],
      currentPizza: undefined
    };

    this._handleAddPizza = this._handleAddPizza.bind(this);
    this._handleRemovePizza = this._handleRemovePizza.bind(this);
    this._handleSelectPizza = this._handleSelectPizza.bind(this);
    this._handleSelectIngredient = this._handleSelectIngredient.bind(this);
  }
  componentWillMount() {
    fetch('/public/config.json')
      .then((res) => res.json())
      .then(({ data }) => this.setState(data))
      .catch((error) => this.setState({ error }));
  }
  _handleAddPizza() {

    const { pizzas, pizza, currentPizza } = this.state;

    this.setState({
      currentPizza: currentPizza === undefined ? 0 : currentPizza,
      pizzas: pizzas.concat({
        total: pizza.price,
        ingredients: []
      })
    })
  }
  _handleRemovePizza(pidx) {

    const { pizzas, currentPizza } = this.state;

    let nextPizza;

    if (currentPizza === pidx && pidx === 0 ||
        currentPizza < pidx) {
      nextPizza = currentPizza
    } else {
      nextPizza = currentPizza - 1
    }

    this.setState({
      pizzas: pizzas.filter((_, idx) => idx !== pidx),
      currentPizza: nextPizza
    })
  }
  _handleSelectPizza(pidx) {
    this.setState({ currentPizza: pidx })
  }
  _handleSelectIngredient(name) {

    const { pizzas, ingredients, currentPizza } = this.state;
    const ingredient = ingredients.find(({ name: iname }) => name === iname);

    this.setState({
      pizzas: pizzas.map((pizza, idx) => {
        if (idx === currentPizza) {
          return Object.assign({}, pizza, {
            ingredients: pizza.ingredients.concat({
              left: Math.random() * (200 - 30) + 30,
              top: Math.random() * (230 - 50) + 50,
              name
            }),
            total: pizza.total + ingredient.price,
          })
        } else {
          return pizza
        }
      })
    })
  }
  render() {

    const { pizza, pizzas, ingredients, currentPizza } = this.state;

    return (
      <div>
        <div className='top-block'>
          <Viewport
            pizzaImg={pizza.src}
            pizzas={pizzas}
            ingredientsConfig={ingredients}
            currentPizza={currentPizza}
            onAddPizza={this._handleAddPizza} />
          <IngredientsSelector
            ingredients={ingredients}
            onSelect={this._handleSelectIngredient} />
        </div>
        <Basket
          pizzas={pizzas}
          currentPizza={currentPizza}
          onRemovePizza={this._handleRemovePizza}
          onSelectPizza={this._handleSelectPizza} />
      </div>
    )
  }
}

export default App;
