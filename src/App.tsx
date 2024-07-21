import { useStore } from './models/RootStore.ts';
import { useEffect } from 'react';
import { getAddress, getListMeters } from './utils/api';
import { IAddress } from './types/meters';

function App() {
  const rootStore = useStore();

  useEffect(() => {
    const addresses: IAddress = {};
    getListMeters().then(res => {
      if(res && res.length > 0) {
        let address: IAddress;
        res.forEach(el => {
          if(addresses[el.area.id]) {
            address = addresses[el.area.id];
          } else {
            address = getAddress(el.area.id).then(response => {
              return response;
            });
            addresses[el.area.id] = address;
          }
          el.address = address;
        })
      }
      console.log(res)
      console.log(addresses)
    })
  },[])

  return (
    <div className="App">
      {rootStore.meters.map((el) => (
        <p>{el.id}</p>
      ))}
    </div>
  );
}

export default App;
