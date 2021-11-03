
import React, { useState } from 'react';
import { Layout, Card, Button, Space, message } from 'antd';
import KexEditor from '../Cards/KexEditor';
import './style.less';

const {Content} = Layout;

const QueryEditor = props => {
  return (
    <>
      <Content style={{height: '100%' }}>
        <div className="editor-card-wrapper" >
          <Card
            className="editor-card"
            style={{ width: '100%' }}
            >
            <KexEditor />
          </Card>
        </div>
      </Content>
    </>
  );
};

export default QueryEditor;

