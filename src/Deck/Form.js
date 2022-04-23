import React, { useState } from "react";

function DeckForm({ onSubmit, onCancel, initialState = { name: "", description: "" },}) {
    const [deck, setDeck] = useState(initialState);

    function changeHandler({ target: { name, value }}) {
        setDeck((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    // preventDefault() -
        // if invoked when the cancelable attribute value is true, 
        // and while executing a listener for the event with 
        // passive set to false, signals to the operation that 
        // caused event to be dispatched that it needs to be canceled.

    // stopPropagation() -
        // When dispatched in a tree, invoking this method prevents event 
        // from reaching any objects other than the current object.

        
    function submitHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        onSubmit(deck);
    }

    return (
        <>
            <h3>Create Deck</h3>
            <form onSubmit={submitHandler} className="deck-edit">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={deck.name}
                            required={true}
                            className="form-control"
                            placeholder="Deck Name"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            id="description"
                            name="description"
                            className="form-control"
                            rows="4"
                            required={true}
                            placeholder="Brief description of the deck"
                            value={deck.description}
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="button" className="btn btn-secondary mr-2" onCancel={onCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </>
    )
}

export default DeckForm;