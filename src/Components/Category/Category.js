import React from 'react';
import './Category.css';

import { useDataContext } from '../../export';

function CheckBox({ data, checked, change }) {
  return (
    <div className="category-list">
      <div className="category">
        <input
          type="checkbox"
          name={data}
          value={data}
          checked={checked}
          onChange={change}
          className="category_checkbox"
        />
        <label htmlFor={data} className="category_label">
          {data}
        </label>
      </div>
    </div>
  );
}

export function Category({ data }) {
  const { state, dispatch } = useDataContext();
  function handleChange(e) {
    dispatch({
      type: 'FILTER_BY_CATEGORY',
      payload: { isChecked: e.target.checked, value: e.target.value },
    });
  }

  return (
    <>
      <h4>Category</h4>
      <div className="">
        {data.map((element, index) => (
          <CheckBox
            data={element}
            change={handleChange}
            key={index}
            checked={state.filter.category.some((value) => value === element)}
          />
        ))}
      </div>
    </>
  );
}
