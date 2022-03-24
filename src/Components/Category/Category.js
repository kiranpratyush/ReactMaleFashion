import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDataContext } from '../../Contexts/DataContext';

function CheckBox({ data, change, index, checked }) {
  return (
    <div className="category-list">
      <div>
        <input
          type="checkbox"
          name={data.category}
          value={data.category}
          onChange={() => {
            change(index);
          }}
          checked={checked}
        />
        <label htmlFor={data.category}>{data.category}</label>
      </div>
    </div>
  );
}
export function Category({ data }) {
  const array = new Array(data.length).fill(false);
  const [checked, setChecked] = useState(array);
  const { dispatch } = useDataContext();

  useEffect(() => {
    dispatch({ type: 'FILTERBYCATEGORY', payload: checked });
  }, [checked, dispatch]);
  function handleChange(index) {
    console.log(index);
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    console.log(newChecked);
    setChecked(newChecked);
  }
  return (
    <>
      <h4>Category</h4>
      <div className="category-list">
        {data.map((element, index) => (
          <CheckBox
            data={element}
            checked={checked[index]}
            change={handleChange}
            index={index}
            key={element.id}
          />
        ))}
      </div>
    </>
  );
}
