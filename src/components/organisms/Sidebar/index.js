import { Layout } from 'antd';
import './style.less';
import Tree from 'components/atoms/Tree';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClusterDetails } from 'redux/cluster/clusterActionCreator';
import Loading from 'components/atoms/Loading';

const { Sider } = Layout;

function SideBar({ theme }) {
  const [ loading, setLoading ] = useState(true);
  const dispatch = useDispatch();
	const clusterReducer  = useSelector((state) => state.clusterReducer);

  const handleFetchClusterInfo = async () => {
    dispatch(fetchClusterDetails());
  }

  useEffect(() => {
    console.log('fetching cluster details');
    handleFetchClusterInfo();
  }, [clusterReducer]);

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
            : <Tree />
        }
      </Sider>
    </div>
  )
}

export default SideBar;
