/* eslint-disable import/first */
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/sql/sql');

import {UnControlled as CodeMirror} from 'react-codemirror2'
import { Row, Col, Button, Space } from 'antd';
function KexEditor(props) {
  const executeQuery = () => {
    console.log('executing query')
  }

  const clearEditor = () => {
    console.log('clearing editor')
  }

  return (
    <>
    <Row>
      <Col span={20}>
        <CodeMirror
          value='SELECT * FROM USERS;'
          options={{
            mode: 'sql',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            console.log('changed ', editor);
            console.log('data ', data);
            console.log('value ', value);
          }}
        />
      </Col>
    </Row>
    <Row class="actions" style={{ paddingTop: 15 }}>
      <Col>
          <Space>
            <Button type="primary">Run</Button>
            <Button type="warning">Clear</Button>
          </Space>
      </Col>
    </Row>
    </>
  );
}

export default KexEditor;

