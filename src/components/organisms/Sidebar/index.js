import { Layout } from 'antd';
import Icon from '@ant-design/icons';
import './style.less';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClusterDetails, fetchAllTreeNodes } from 'redux/cluster/clusterActionCreator';
import SidebarTree from '../SidebarTree';
import Loading from 'components/atoms/Loading';

const { Sider } = Layout;

function SideBar({ theme }) {
  const [ loading, setLoading ] = useState(true);
  const dispatch = useDispatch();
	const { clusterInfo, treeNodes }  = useSelector((state) => state.clusterReducer);

  const handleFetchClusterInfo = async () => {
    dispatch(fetchClusterDetails());
  }

  const handleFetchAllNodes = async () => {
    dispatch(fetchAllTreeNodes());
  }

  useEffect(() => {
    handleFetchClusterInfo();
    handleFetchAllNodes();
  }, []);



  useEffect(() => {
    if (treeNodes.streams.length) {
      setLoading(false);
    }
  }, [treeNodes.streams]);



  return (
    <div>
        <Sider
          className="kex-sider"
          theme={theme}
          width={350}
        >
        {
          loading
            ? <Loading loading />
            : <SidebarTree
                clusterInfo={clusterInfo}
                treeNodes={treeNodes}
              />
        }
      </Sider>
    </div>
  )
}

export default SideBar;
