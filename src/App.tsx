import { useStore } from './models/RootStore.ts';
import { observer } from 'mobx-react-lite';
import ListMeters from './components/ListMeters/ListMeters';

function App() {
  const rootStore = useStore();

  return (
    <div className="App">
      {rootStore?.showMeters?.map((el) => <p>{el?.id}</p>)}
      <ListMeters />
    </div>
  );
}

export default observer(App);
