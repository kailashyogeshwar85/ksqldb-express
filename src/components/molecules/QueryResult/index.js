import Table from 'components/atoms/Table';
import { Card } from 'antd';

const QueryResult = props =>  {
  return (
    <Card className='query-result' title="Result">
      <Table/>
    </Card>
  );
}

export default QueryResult;
