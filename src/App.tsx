import { useStore } from './models/RootStore.ts';
import { observer } from 'mobx-react-lite';
import TableMeters from './components/TableMeters/TableMeters';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const rootStore = useStore();

  console.log(rootStore.showMeters);

  return (
    <div className="App">
      {rootStore?.showMeters?.map((el) => <p>{el?.address.house.address} {el?.address.str_number_full}</p>)}
      <TableMeters />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(App);
