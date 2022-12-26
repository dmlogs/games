import './App.css';

function App() {
  let games = [
    {
      name: "Wingspan",
      playersLow: 2,
      playersHigh: 5
    },
    {
      name: "Catan",
      playersLow: 2,
      playersHigh: 6
    },
    {
      name: "Catan: Cities & Knights",
      playersLow: 2,
      playersHigh: 6
    },
    {
      name: "Puerto Rico",
      playersLow: 3,
      playersHigh: 4
    },
    {
      name: "Unstable Unicorns"
    },
    {
      name: "Dominion"
    },
    {
      name: "Art of Chill"
    },
    {
      name: "Iota"
    },
    {
      name: "Betrayal of House on the Hill"
    },
    {
      name: "Splendor"
    },
    {
      name: "Ticket to Ride"
    },
    {
      name: "Ultimate Werewolf"
    },
    {
      name: "Forbidden Island"
    },
    {
      name: "Codenames"
    },
    {
      name: "Cards Against Humanity"
    },
    {
      name: "What Do You Meme?"
    },
    {
      name: "It's In The Bag: Off The Wall",
      playersLow: '4+'
    }
  ].sort((a,b) => {
    return a.name?.localeCompare(b.name)
  });

  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
        <div style={{flex: 1}}><h2 style={{textDecoration: 'underline'}}>Name</h2></div>
        <div style={{flex: 1}}><h2 style={{textDecoration: 'underline'}}>Players</h2></div>
      </div>
      {games.map(game => {
        return (<div style={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
          <div style={{flex: 1}}><h3>{game.name}</h3></div>
          <div style={{flex: 1}}>{game.playersLow}{game.playersLow && game.playersHigh && " - "}{game.playersHigh}</div>
        </div>)
      })}
    </div>
  );
}

export default App;
