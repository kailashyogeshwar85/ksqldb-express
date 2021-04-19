/* eslint-disable import/first */
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/sql/sql');

import {UnControlled as CodeMirror} from 'react-codemirror2'
import { Row, Col, Button, Space } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

function KexEditor(props) {
  const [value, setValue] = useState('LIST STREAMS;');

  const executeQuery = () => {
    axios.post('http://localhost:3001/query/execute', {
      data: {
        ksql: value,
      },
    }).then(({ data })  => {
      console.log('query data ', data);
    }).catch(err => {
      console.log('error ', err);
    });
  }

  const clearEditor = () => {
    console.log('clearing editor')
  }

  return (
    <>
    <Row>
      <Col span={20}>
        <CodeMirror
          value={value}
          options={{
            mode: 'sql',
            theme: 'material',
            lineNumbers: true
          }}
          onChange={(editor, data, value) => {
            console.log('changed ', editor);
            console.log('data ', data);
            console.log('value ', value);
            setValue(value);
          }}
        />
      </Col>
    </Row>
    <Row className="actions" style={{ paddingTop: 15 }}>
      <Col>
          <Space>
            <Button type="primary" onClick={executeQuery}>Run</Button>
            <Button type="warning">Clear</Button>
          </Space>
      </Col>
    </Row>
    </>
  );
}

export default KexEditor;

