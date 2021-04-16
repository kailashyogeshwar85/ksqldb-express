import React, { useState } from 'react';
import TextArea from 'components/atoms/TextArea';
import Title from 'components/atoms/Title';
import { Layout, Row, Col } from 'antd';
import './style.less';

const {Content} = Layout;

const QueryEditor = props => {
  const { editorTheme, setEditorTheme } = useState('light');
  return (
    <>
      <Content className="editor-wrapper">
        <Row>
          <Col span={22}>
            <Title
              tag="h1"
              spacing="md"
              theme= { props.theme === 'light' ? 'dark' : 'light' }
            > KsqlDB Query Editor
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={22}>
            <TextArea theme={editorTheme}/>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default QueryEditor;

