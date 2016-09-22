import React, { Component } from 'react';
import PizzasViewer from './viewer';

class Viewport extends Component {
  render() {

    const { pizzaImg, currentPizza, pizzas, ingredientsConfig } = this.props;

    return (
      <div className='viewport'>
        <div className='container'>
          <div className='inner'>
            <PizzasViewer
              pizzaImg={pizzaImg}
              pizzas={pizzas}
              ingredientsConfig={ingredientsConfig}
              currentPizza={currentPizza} />
          </div>
        </div>
        <button className='add-pizza' onClick={this.props.onAddPizza}>add pizza</button>
      </div>
    )
  }
}

export default Viewport;
