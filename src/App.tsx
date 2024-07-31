import { observer } from 'mobx-react-lite';
import { useStore } from './models/RootStore';
import { Tag, Space, Table, type TableProps } from 'antd';
import { IDataMeters } from './types/meters';
import { formatDateFrom } from './utils/utils';

const columns: TableProps<IDataMeters>['columns'] = [
  {
    title: '№',
    dataIndex: 'index',
    key: 'id',
    width: 50,
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
    width: 200,
  },
  {
    title: 'Автоматический',
    dataIndex: 'is_automatic',
    key: 'is_automatic',
    width: 200,
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
  {
    title: 'Примечание',
    dataIndex: 'description',
    key: 'description',
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

  const data: IDataMeters[] | any[] = rootStore?.showMeters.map((el, index) => {
    return {
      ...el,
      installation_date: formatDateFrom(el?.installation_date),
      index: index + 1,
    };
  });

  return (
    <div className="App">
      <h3>Список счетчиков</h3>
      {data && data.length > 0 && !data.includes(undefined) && (
        <Table columns={columns} dataSource={data} rowKey={'id'} />
      )}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(App);
