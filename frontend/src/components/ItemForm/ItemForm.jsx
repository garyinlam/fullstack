import React, { useState } from "react";
import "./ItemForm.scss";

const ItemForm = (props) => {
  const { defaultFormState, handleSubmit, formTitle } = props;
  const [item, setItem] = useState(defaultFormState);

  const handleValidation = (e) => {
    e.preventDefault();

    if (item.maxLevel === 0 || item.weight === 0) {
      alert("Max level and weight cannot be 0");
      return;
    }

    if(item.notes === "") {
      item.notes = null;
    }

    if(item.superLevel === "") {
      item.superLevel = null;
    }

    handleSubmit(item);
  };

  return (
    <div className="item-form">
      <h2 className="item-form__title">{formTitle}</h2>
      <form className="item-form__form" onSubmit={handleValidation}>
        <label className="item-form__label" htmlFor="itemName">
          Item name
        </label>
        <input
          className="item-form__input"
          type="text"
          placeholder="Item name"
          id="itemName"
          required
          value={item.name}
          onInput={(e) => setItem({ ...item, name: e.target.value })}
        />
        <label className="item-form__label" htmlFor="imageUrl">
          Image url
        </label>
        <input
          className="item-form__input"
          type="text"
          placeholder="Image url"
          id="imageUrl"
          required
          value={item.imageUrl}
          onInput={(e) => setItem({ ...item, imageUrl: e.target.value })}
        />
        <label className="item-form__label" htmlFor="maxLevel">
          Max level
        </label>
        <input
          className="item-form__input"
          type="number"
          placeholder="Max level"
          id="maxLevel"
          required
          value={item.maxLevel}
          onInput={(e) => setItem({ ...item, maxLevel: e.target.value })}
        />
        <label className="item-form__label" htmlFor="weight">
          Weight
        </label>
        <input
          className="item-form__input"
          type="number"
          placeholder="Weight"
          id="weight"
          required
          value={item.weight}
          onInput={(e) => setItem({ ...item, weight: e.target.value })}
        />
        <label className="item-form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="item-form__input"
          placeholder="Description"
          id="description"
          name="description"
          required
          onInput={(e) => setItem({ ...item, description: e.target.value })}
        >
          {item.description}
        </textarea>
        <label className="item-form__label" htmlFor="levels">
          Levels (use "|" to separate each level)
        </label>
        <textarea
          className="item-form__input"
          placeholder="Levels"
          id="levels"
          name="levels"
          required
          onInput={(e) => setItem({ ...item, levels: e.target.value })}
        >
          {item.levels}
        </textarea>
        <label className="item-form__label" htmlFor="superLevel">
          Super level
        </label>
        <input
          className="item-form__input"
          type="text"
          placeholder="Super level"
          id="superLevel"
          value={item.superLevel}
          onInput={(e) => setItem({ ...item, superLevel: e.target.value })}
        />
        <label className="item-form__label" htmlFor="notes">
          Notes (use "|" to separate each note)
        </label>
        <textarea
          className="item-form__input"
          placeholder="Notes"
          id="notes"
          name="notes"
          onInput={(e) => setItem({ ...item, notes: e.target.value })}
        >
          {item.notes}
        </textarea>
        <button type="submit" className="item-form__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
