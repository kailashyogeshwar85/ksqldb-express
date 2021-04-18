import React, {useState} from 'react';
import Table from 'components/atoms/Table';
import { Card } from 'antd';

const QueryResult = props =>  {
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
    console.log('new ', key, type);
    setActiveTab(key);
  }

  const contentList = {
    records: <Table />,
    schema: <p>Avro Schema</p>
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
