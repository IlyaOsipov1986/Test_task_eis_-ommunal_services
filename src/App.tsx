import { observer } from 'mobx-react-lite';
import { useStore } from './models/RootStore';
import { Space, Table, type TableProps } from 'antd';
import { IDataMeters } from './types/meters';

const columns: TableProps<IDataMeters>['columns'] = [
  {
    title: '№',
    dataIndex: 'index',
    key: 'index',
  },
  // {
  //   title: 'Тип',
  //   key: '_type',
  //   dataIndex: '_type',
  //   render: (_, { _type }) => (
  //     <>
  //       {_type?.map((tag) => {
  //         return <p key={tag}>{tag[0]}</p>;
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Дата установки',
    dataIndex: 'installation_date',
    key: 'installation_date',
  },
  {
    title: 'Автоматический',
    dataIndex: 'is_automatic',
    key: 'is_automatic',
  },
  {
    title: 'Текущие показания',
    dataIndex: 'initial_values',
    key: 'initial_values',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

function App() {
  const rootStore = useStore();

  const data: IDataMeters[] | any[] = rootStore?.showMeters.map((el) => el);

  console.log(rootStore.showMeters);

  return (
    <div className="App">
      <h3>Список счетчиков</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(App);
