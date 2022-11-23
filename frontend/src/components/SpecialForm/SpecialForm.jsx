import React from 'react'
import "./SpecialForm.scss"

const SpecialForm = (props) => {
  const { defaultFormState, handleSubmit, formTitle } = props
  const [special, setSpecial] = useState(defaultFormState);


  const handleValidation = (e) => {
    e.preventDefault();

    if (special.cooldown === 0) {
      alert("Cooldown cannot be 0");
      return;
    }

    if(special.notes === "") {
      special.notes = null;
    }
    
    handleSubmit(special);
  };

  return (
    <div className="special-form">
      <h2 className="special-form__title">{formTitle}</h2>
      <form className="special-form__form" onSubmit={handleValidation}>
      <label className="special-form__label" htmlFor="specialName">
          Special name
        </label>
        <input
          className="special-form__input"
          type="text"
          placeholder="Special name"
          id="specialName"
          required
          value={special.name}
          onInput={(e) => setSpecial({ ...special, name: e.target.value })}
        />
        <label className="special-form__label" htmlFor="imageUrl">
          Image url
        </label>
        <input
          className="special-form__input"
          type="text"
          placeholder="Image url"
          id="imageUrl"
          required
          value={special.imageUrl}
          onInput={(e) => setSpecial({ ...special, imageUrl: e.target.value })}
        />
        <label className="special-form__label" htmlFor="cooldown">
          Cooldown
        </label>
        <input
          className="special-form__input"
          type="number"
          placeholder="Cooldown"
          id="cooldown"
          required
          value={special.cooldown}
          onInput={(e) => setSpecial({ ...special, cooldown: e.target.value })}
        />
        <label className="special-form__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="special-form__input"
          placeholder="Description"
          id="description"
          name="description"
          required
          onInput={(e) => setSpecial({ ...special, description: e.target.value })}
        >
          {special.description}
        </textarea>
        <label className="special-form__label" htmlFor="notes">
          Notes (use "|" to separate each note)
        </label>
        <textarea
          className="special-form__input"
          placeholder="Notes"
          id="notes"
          name="notes"
          onInput={(e) => setSpecial({ ...special, notes: e.target.value })}
        >
          {special.notes}
        </textarea>
        <button type="submit" className="special-form__button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SpecialForm