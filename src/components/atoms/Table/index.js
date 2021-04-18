
import { Table, Tag, Space, Layout } from 'antd';

  const { Content } = Layout;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Tel',
      dataIndex: 'tel'
    },
    {
      title: 'Phone',
      dataIndex: 'phone'
    },
    {
      title: 'Column 1',
      dataIndex: 'column1'
    },
    {
      title: 'Column 2',
      dataIndex: 'column2'
    },
    {
      title: 'Column 3',
      dataIndex: 'column3'
    },
    {
      title: 'Column 4',
      dataIndex: 'column4'
    },
    {
      title: 'Column 5',
      dataIndex: 'column5'
    },
    {
      title: 'Column 6',
      dataIndex: 'column6'
    },
    {
      title: 'Column 7',
      dataIndex: 'column7'
    },
    {
      title: 'Column 8',
      dataIndex: 'column8'
    },
    {
      title: 'Column 9',
      dataIndex: 'column9'
    },
    {
      title: 'Column 10',
      dataIndex: 'column10'
    },
    {
      title: 'Column 11',
      dataIndex: 'column11'
    },
    {
      title: 'Column 12',
      dataIndex: 'column12'
    },
    {
      title: 'Column 13',
      dataIndex: 'column13'
    }

  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      description: 'Jim Green',
      address: `London, Park Lane no. ${i}`,
      tel: '0571-22098333',
      phone: 18889898888,
      column1: `coldata-1`,
      column2: `coldata-2`,
      column3: `coldata-3`,
      column4: `coldata-4`,
      column5: `coldata-5`,
      column6: `coldata-6`,
      column7: `coldata-7`,
      column8: `coldata-8`,
      column9: `coldata-9`,
      column10: `coldata-10`,
      column11: `coldata-11`,
      column12: `coldata-12`,
      column13: `coldata-13`,



    });
  }

function QueryResult() {
  return (
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: '100vw', y: 300 }}
        pagination={{ position: ['none', 'none'] }}
        bordered
        footer={() => (<h4>Total Records: 100</h4>)}
        size='small'
      />
  )
}
export default QueryResult;
