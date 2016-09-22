import React, { Component } from 'react';

const IngredientItem = ({ img, onSelect }) => (
  <li>
    <img src={img} className='ingredient-item' onClick={onSelect} />
  </li>
);

function renderIngredients(ingredients, onSelect) {
  return (
    ingredients.map(({ name, src }) => {
      return <IngredientItem onSelect={() => onSelect(name)} key={name} img={src} />
    })
  )
}

class IngredientsSelector extends Component {
  render() {

    const { ingredients, onSelect } = this.props;

    return (
      <div className='ingredients-selector'>
        <ul>{renderIngredients(ingredients, onSelect)}</ul>
      </div>
    )
  }
}

export default IngredientsSelector;
