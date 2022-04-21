import React from "react";
import { Link } from "react-router-dom";

function Prompt({ deck, onDelete }) {
    const { cards = [] } = deck;
    return(
        <article className="col-12 col-md-6 col-xl-4 my-2 align-self-stretch">
            <div className="media mb-2">
                <div className="media-body">
                    <h5 className="mt-0">{deck.name}</h5>
                    {deck.description}
                </div>
            </div>
            <Link
                to={`/decks/${deck.id}/edit`}
                className="btn btn-secondary mr-2"
                title="Edit deck"
            >
                <span className="oi oi-pencil" /> Edit
            </Link>
            <Link
                to={`/decks/${deck.id}/study`}
                className="btn btn-primary mr-2"
                title="Study deck"
            >
                <span className="oi oi-book" /> Study
            </Link>
            <Link
                to={`/decks/${deck.id}/cards/new`}
                className="btn btn-primary"
                title="Add Card"
            >
                <span className="oi oi-plus" /> Add Cards
            </Link>
            <button className="btn btn-danger float-right" title="Delete deck" onClick={() => onDelete(deck.id)}>
                <span className="oi oi-trash"/> 
            </button>
        </article>    )
}
export default Prompt;