import React, { Component } from 'react';

const WIDTH = 300;

const IngredientItem = ({ ingr: { img, left, top } }) => (
  <li style={{ left, top }}>
    <img src={img} className='ingredient-item' />
  </li>
)

const PizzaItem = ({ pizzaImg, ingredients, num }) => (
  <li className='pizza-item'>
    <span className='num'>{num}</span>
    <img src={pizzaImg} width={300} height={300} />
    <ul>{ingredients.map((ingr, idx) => (
      <IngredientItem
        key={ingr.img+idx}
        ingr={ingr} />
    ))}</ul>
  </li>
)

class PizzasViewer extends Component {
  render() {

    const { pizzas, ingredientsConfig, currentPizza, pizzaImg } = this.props;

    const mapConfig = ingredientsConfig
      .reduce((agg, ingr) => {
        agg[ingr.name] = ingr.src;
        return agg;
      }, {});

    const style = {
      width: WIDTH * pizzas.length,
      transform: `translate3d(${currentPizza * -WIDTH}px, 0, 0)`
    };

    return (
      <ul className='list' style={style}>
        {pizzas.map(({ ingredients }, idx) => (
          <PizzaItem
            key={idx}
            pizzaImg={pizzaImg}
            ingredients={ingredients.map((ingr) => {
              ingr.img = mapConfig[ingr.name];
              return ingr;
            })}
            num={idx + 1} />
        ))}
      </ul>
    )
  }
}

export default PizzasViewer;
