import './App.css';
import { useState } from 'react'

const games = [
  {
    n: "Wingspan",
    l: 2,
    h: 5
  },
  {
    n: "Catan",
    l: 2,
    h: 6
  },
  {
    n: "Catan: Cities & Knights",
    l: 2,
    h: 6
  },
  {
    n: "Puerto Rico",
    l: 3,
    h: 4
  },
  {
    n: "Exploding Kittens",
    l: 2,
    h: 5
  },
  {
    n: "Unstable Unicorns",
    l: 2,
    h: 8
  },
  {
    n: "Dominion",
    l: 2,
    h: 4
  },
  {
    n: "Art of Chill",
    l: 2,
    h: 4
  },
  {
    n: "Iota",
    l: 2,
    h: 4
  },
  {
    n: "Betrayal of House on the Hill",
    l: 3,
    h: 6
  },
  {
    n: "Splendor",
    l: 2,
    h: 4
  },
  {
    n: "Ticket to Ride",
    l: 2,
    h: 5
  },
  {
    n: "Ultimate Werewolf Deluxe Edition",
    l: 5,
    h: 75
  },
  {
    n: "One Night Ultimate Vampire",
    l: 3,
    h: 10
  },
  {
    n: "Forbidden Island",
    l: 2,
    h: 4
  },
  {
    n: "Codenames",
    l: 2,
    h: 8
  },
  {
    n: "Cards Against Humanity",
    l: 4,
    h: 30
  },
  {
    n: "It's In The Bag: Off The Wall",
    l: '4+'
  },
  {
    n: "Coup",
    l: 2,
    h: 6
  },
  {
    n: "Shinobi",
    l: 4,
    h: 6
  },
  {
    n: "Fluxx",
    l: 2,
    h: 6
  },
  {
    n: "Fluxx (Monty Python)",
    l: 2,
    h: 6
  },
  ,
  {
    n: "Red7",
    l: 2,
    h: 4
  },
  {
    n: "Moose In The House",
    l: 2,
    h: 5
  },
  {
    n: "The Resistance",
    l: 5,
    h: 10
  }
].sort((a,b) => {
  return a.n?.localeCompare(b.n)
});

function App() {
  const [ players, setPlayers ] = useState()

  

  return (
    <div className="App">
      <p>
      Players: <input type='text' onChange={(e) => {
        const v =  e.target.value;
        if (+v > 0) {
          setPlayers(+v);
        } else {
          setPlayers(null);
        }
      }} /></p>
      <div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
        <div style={{flex: 1}}><h2 style={{textDecoration: 'underline'}}>Name</h2></div>
        <div style={{flex: 1}}><h2 style={{textDecoration: 'underline'}}>Players</h2></div>
      </div>
      {games.filter(g => {
        if (typeof g.l === 'string') {
          return players >= g.l.replace(/\D/g,'') 
        }

        if (players && players < g.l || players > g.h) {
          return false;
        }

        return true;
      }).map(g => {
        return (<div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
          <div style={{flex: 1}}><h3>{g.n}</h3></div>
          <div style={{flex: 1}}>{g.l}{g.l && g.h && " - "}{g.h}</div>
        </div>)
      })}
    </div>
  );
}

export default App;
