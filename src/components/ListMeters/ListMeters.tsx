import { useStore } from '../../models/RootStore';

const ListMeters = () => {
  const rootStore = useStore();
  console.log(rootStore.meters);

  return <div></div>;
};
export default ListMeters;
