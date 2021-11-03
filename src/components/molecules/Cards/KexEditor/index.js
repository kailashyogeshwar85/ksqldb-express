/* eslint-disable import/first */
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/sql/sql');

import { Controlled as CodeMirror} from 'react-codemirror2'
import { Row, Col, Button, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QUERY_EXECUTE_REQUESTED } from 'redux/editor/queryEditorActionTypes';
import { alertMessage } from 'utils/alert.util';

function KexEditor() {
  const { queryExecuteSuccess, queryExecuteError } = useSelector(state => state.queryEditorReducer);
  const dispatch = useDispatch();
  const sampleQuery = 'SELECT * FROM ORDER_PLACED_STREAM WHERE PRODUCT_ID = 1;'
  const [value, setValue] = useState(sampleQuery);

  useEffect(() => {
    if (!queryExecuteSuccess && queryExecuteError.length) {
      alertMessage(queryExecuteError);
    }
  }, [queryExecuteSuccess, queryExecuteError])

  const executeQuery = async () => {
    dispatch({
      type: QUERY_EXECUTE_REQUESTED,
      payload: { query: value }
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
              lineNumbers: true,

            }}
            onBeforeChange={(editor, data, value) => {
              setValue(value);
            }}
            onChange={(editor, data, value) => {
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

