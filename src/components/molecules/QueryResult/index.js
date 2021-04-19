import React, {useState} from 'react';
import { Card, Table, Empty } from 'antd';


const ResultTable = (props) => {
  const columns = [];
  const data = [];
  const dataSource = [];
  return(
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: '100vw', y: 300 }}
      pagination={{ position: ['none', 'none'] }}
      bordered
      footer={() => (<h4>Total Records: 100</h4>)}
      size='small'
    >
    </Table>
  )
}

const QueryResult = props =>  {
  const result = props.result;
  const [activeTab, setActiveTab ] = useState('records');

  const tablist = [
    {
      key: 'records',
      tab: 'Records'
    },
    {
      key: 'schema',
      tab: 'Schema'
    }
  ];

  const onTabChange = (key, type) => {
    setActiveTab(key);
  }

  const contentList = {
    records: result ? <ResultTable />: <Empty style={{ height: 350 }}/>,
    schema: <Empty style={{ height: 350 }} />
  };

  return (
    <Card
      className='query-result'
      tabList= {tablist}
      activeTabKey={activeTab}
      onTabChange= {onTabChange}
    >
      {contentList[activeTab]}
    </Card>
  );
}

export default QueryResult;
