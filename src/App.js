import React, { useState } from "react";
import "./styles.css";

let gameList = [];

async function fetchGames() {
  try {
    let promise = await fetch('http://localhost:4999/ls');
    let json =  await promise.json();
    gameList = Object.values(json)
  }
  catch (err) {
    console.log('fetch failed', err);
    return err
  }
}

export default function App() {
  const [state, setState] = useState("welcome");

  const gameItem = ({number, issued}) => { 
    return (<li key={number}><a href="localhost:5555/">game#{number} issued {issued}</a></li> )
  }

  function GameList() {
    fetchGames();
    console.log('gameList',gameList);
    return(
      <ul>
        { gameList.map(gameItem) }
      </ul>
    )
  }

  function welcome() {
    return (
      <div>
        <h1>Welcome to Spacewar!</h1>
        <h2>A tribute to the 1962 game developed for the PDP-1</h2>
        <br /> ------------- <br />
        <button className="myButton" onClick={() => setState("localplay")}>
          Local Play
        </button>
        <br/> ------------- <br />
        <button className="myButton" onClick={() => setState("networkplay")}>
          Network Play
        </button>
        <br/> ------------- <br />
        <br />
        <br />
        <br />
        <p>
          Spaceships Wedge and Needle battle it out while orbiting a black hole
        </p>
        <p>State = {state} </p>
      </div>
    );
  }

  function dispatch(state) {
    switch (state) {
      case "welcome":
        return welcome();
      case "localplay":
        return localPlay();
      case "networkplay":
        return networkPlay();
      case "startlocal":
        return startLocal();
      case "creategame":
        return createGame();
      case "joingame":
        return joinGame();
      default:
        console.log("missing case in dispatch");
    }
  }

  function localPlay() {
    return (
      <div className="LocalPlay">
        <h1>Spacewar!</h1>
        <h2>LocalPlay</h2>
        <p>For local play, both players will share the same keyboard.</p>
        <br /> ------------- <br />
        <p>
          Player 1: W = fire, A = rotate left, S = rocket burn, D = rotate right
        </p>
        <p>
          Player 2: I = fire, J = rotate left, K = rocket burn , L = rotate
          right
        </p>
        <br /> ------------- <br />
        <button className="myButton" onClick={() => setState("startlocal")}>
          Start Local Game
        </button>
        <br /> ------------- <br />
        <button className="myButton" onClick={() => setState("welcome")}>
          Back
        </button>
      </div>
    );
  }

  function startLocal() {
    return (
      <div>
        <h1>Spacewar!</h1>
        <br />
        <br />
        <a href="http://malfax.net" target="_blank" rel="noopener noreferrer">
          Start
        </a>
        <br /> ------------- <br />
        <button className="myButton" onClick={() => setState("welcome")}>
          Back
        </button>
      </div>
    );
  }

  function networkPlay() {
    return (
      <div className="NetworkPlay">
        <h1>Spacewar!</h1>
        <h2>Network Play</h2>
        <h3>Select an option below</h3>
        <br /> ------------- <br />
        <button className="myButton" onClick={() => setState("creategame")}>
          Create a new game
        </button>
        <br /> ------------- <br />
        <button className="myButton" onClick={() => setState("joingame")}>
          Join an existing game
        </button>
        <br/> ------------- <br/>
        <div id="challenges">
          <GameList />
        </div>
        <br/> ------------- <br/>
        <button className="myButton" onClick={() => setState("welcome")}>
          Back
        </button>
      </div>
    );
  }



  function createGame() {
    return (
      <div>
        <h1>Spacewar!</h1>
        <h2>New game</h2>
        <br /> ------------- <br />
        <br />
        <br />
        <p>Game #47 Created</p>
        <p>Waiting for Player 2 to Join</p>
        <br /> ------------- <br />
        <br />
        <br />
        <button className="myButton" onClick={() => setState("welcome")}>
          Back
        </button>
      </div>
    );
  }

  function joinGame() {
    return (
      <div>
        <h1>Spacewar!</h1>
        <h2>Select a game to join</h2>
        <br /> ------------- <br />
        <br />
        <br />
        <p>first available</p>
        <p>a picklist of existing games</p>
        <p>Waiting for Player 2 to Join</p>
        <br /> ------------- <br />
        <br />
        <br />
        <button className="myButton" onClick={() => setState("welcome")}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <div>{dispatch(state)}</div>
    </div>
  );
}
