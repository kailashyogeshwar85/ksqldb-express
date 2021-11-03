import './style.less';
import React  from 'react';
import { useDispatch } from 'react-redux';
import { Tree, Menu, Dropdown  } from 'antd';
import Icon, { DatabaseFilled, DatabaseOutlined } from '@ant-design/icons'
import { ReactComponent as StreamSvg } from 'assets/svgs/stream.svg';
import { ReactComponent as TableSvg } from 'assets/svgs/table.svg';
import { ReactComponent as PlugSvg } from 'assets/svgs/plug.svg'
import { fetchAllTreeNodes } from 'redux/cluster/clusterActionCreator';

const StreamIcon = props => <Icon component={StreamSvg} {...props} />;

const TableIcon = props => <Icon component={TableSvg} {...props} />;

const ContextMenu = () => (
   <Menu>
    <Menu.Item key="execute">Execute Query </Menu.Item>
    <Menu.Item key="view">View Data</Menu.Item>
    <Menu.Item key="props">Properties</Menu.Item>
  </Menu>
);

const PlugIcon = props => <Icon component={PlugSvg} {...props} />;

const SidebarTree = (props) => {
  const { clusterInfo, treeNodes } = props;
  const dispatch = useDispatch();

  const treeData = [
    {
      title: 'Connection1',
      key: clusterInfo.KsqlServerInfo.ksqlServiceId,
      icon: <PlugIcon />,
      children: [
        {
          title: 'Streams',
          key: 'streams',
          icon: <StreamIcon className='tree-icon stream-icon blink' />,
          children: treeNodes.streams[0].streams.map((el, idx) => ({
            title: el.name,
            key: `streams-${el.name}`,
            children:[]
          }))
        },
        {
          title: 'Tables',
          key: 'tables',
          icon: <TableIcon className='tree-icon' />,
          children: treeNodes.tables[0].tables
            ? treeNodes.tables[0].tables.map((el, idx) => ({
              title: el.name,
              key: `tables-${el.name}`,
              children: []
            }))
            : []
        },
        {
          title: 'Topics',
          key: 'topics',
          icon: <DatabaseFilled className="tree-icon" rotate={270} style={{borderRadius: 2 }}/>,
          children: treeNodes.topics[0].topics.map((el, idx) => ({
            title: el.name,
            key: `topics-${el.name}`,
            icon: <DatabaseOutlined />
          }))
        }
      ]
    }
  ];

  const onSelect = (selectedKeys, info) => {
    console.log('selected ', selectedKeys);
    dispatch(fetchAllTreeNodes());
  }

  return (
      <div className="ke-node-tree">
      <Dropdown overlay={ContextMenu} trigger={['contextMenu']}>
          <div className="tree">
            <Tree
              showIcon
              onSelect={onSelect}
              treeData={treeData}
            />
          </div>
      </Dropdown>
        </div>
  )
}

export default SidebarTree;
