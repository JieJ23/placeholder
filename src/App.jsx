import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Diablo 4</h1>
      <h3>Under Maintenance</h3>
      <div className="card">
        <p>Recommend Alternative</p>
        <a href="https://cydiablo.pages.dev/">community</a>
      </div>
      <div>
        Diablo 4 follows the tale of Sanctuary, a world plagued by the return of
        the demoness Lilith, who seeks to reshape the realm in her dark image.
        Players take on the role of various heroes, embarking on a quest to
        confront Lilith and her minions while exploring a richly detailed world
        filled with danger and intrigue. As they traverse this land, players
        uncover deep lore, engage in fierce battles, and forge alliances to
        protect humanity from impending doom.
      </div>
      <br />
      <br />

      <div>
        Diablo 4 is an action role-playing game set in the dark fantasy universe
        of Sanctuary. It is the fourth installment in the acclaimed Diablo
        series, developed by Blizzard Entertainment. Players create characters
        from various classes, each with unique abilities, to explore an
        expansive open world filled with quests, dungeons, and formidable
        enemies. The game features both solo and multiplayer modes, allowing
        players to team up with others to combat the forces of evil. With its
        immersive storytelling, dark atmosphere, and deep gameplay mechanics,
        Diablo 4 continues the franchise's legacy of engaging hack-and-slash
        action and character progression.
      </div>
    </>
  );
}

export default App;
