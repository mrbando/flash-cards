import React from "react";
import DeckList from "../Deck/List";

function Home() {

    // Need to map a FIFO Queue that displays all available decks
    // Template for available decks
    return (
        <div className="Home container">
            <DeckList />
        </div>
    )
}
export default Home;