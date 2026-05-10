import "./index.css";
import Header from "./components/Header";
import FilmGenerator from "./components/FilmGenerator";
function App() {
  return (
    <div className="flex flex-col m-auto gap-6">
      <Header
        title="Studio Ghibli"
        subtitle="Explore Miyazakis wonderful films"
      />
      <FilmGenerator />
    </div>
  );
}

export default App;
