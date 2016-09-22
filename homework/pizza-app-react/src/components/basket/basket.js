import React, { Component } from 'react';
import Head from './head';
import Body from './body';

function buildIngredientsText(ingredients) {
  const grouped = ingredients
    .reduce((agg, ingr) => {
      if (agg[ingr] === undefined) {
        agg[ingr] = 1;
      } else {
        agg[ingr] = agg[ingr] + 1;
      }
      return agg;
    }, {});

  return Object.entries(grouped)
    .reduce((str, [name, count]) => str += `${name} x${count} `, '');
}

function renderRow({ total, ingredients }, idx, currentPizza, onSelectPizza, onRemovePizza) {

  const style = {
    backgroundColor: currentPizza === idx ? 'yellow' : undefined
  };

  return (
    <tr key={`${idx}-${total}`} style={style}>
      <td className='num'>
        <button className='select-num' onClick={() => onSelectPizza(idx)}>
          {idx + 1}
        </button>
      </td>
      <td className='ingredients'>{buildIngredientsText(ingredients.map(({ name }) => name))}</td>
      <td className='total'>{total}</td>
      <td>
        <button className='remove' onClick={() => onRemovePizza(idx)}>
          &times;
        </button>
      </td>
    </tr>
  )
}

class Basket extends Component {
  render() {

    const { currentPizza, onSelectPizza, onRemovePizza } = this.props;

    return (
      <table className='basket'>
        <Head columns={['#', 'Ingredients', 'Total', 'Remove?']} />
        <Body
          rows={this.props.pizzas}
          renderRow={(pizza, idx) => renderRow(pizza, idx, currentPizza, onSelectPizza, onRemovePizza)} />
      </table>
    )
  }
}

export default Basket;
