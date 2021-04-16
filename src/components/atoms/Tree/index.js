import './style.less';
import React, { useState } from 'react';
import { Tree } from 'antd';
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';
const treeData = [
  {
    title: 'Cluster 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'node-1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'streams',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'stream1',
                key: 's1',
                icon: <CarryOutOutlined />,
                children: []
              }
            ]
          },
          {
            title: 'tables',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'table1',
                key: 't1',
                icon: <CarryOutOutlined />,
                children: []
              }
            ]
          },
        ],
      },
      {
        title: 'node-1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'streams',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'stream1.1',
                key: 's1.1',
                icon: <CarryOutOutlined />,
                children: []
              }
            ]
          },
        ],
      },
      {
        title: 'node-1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'streams',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'stream1.2',
                key: 's1.2',
                icon: <CarryOutOutlined />,
                children: []
              }
            ]
          },
          {
            title: 'tables',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            children: [
              {
                title: 'tables2.1',
                key: 't2.1',
                icon: <CarryOutOutlined />,
                children: []
              }
            ]
          },
        ],
      },
    ],
  },
  {
    title: 'Cluster 2',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'node 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'streams',
            key: '0-1-0-0',
            icon: <CarryOutOutlined />,
            children: []
          },
          {
            title: 'tables',
            key: '0-1-0-1',
            icon: <CarryOutOutlined />,
            children: []
          },
        ],
      },
    ],
  },
];

const Nodes = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <div class="ke-node-tree">
      <Tree
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default Nodes;
