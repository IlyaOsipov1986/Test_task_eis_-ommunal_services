import { useStore } from './models/RootStore.ts';

function App() {
  const rootStore = useStore();

  return (
    <div className="App">
      {rootStore.meters.map((el) => (
        <p>{el.id}</p>
      ))}
    </div>
  );
}

export default App;
