import { Layout } from 'antd';
import './style.less';
import Tree from 'components/atoms/Tree';
const { Sider } = Layout;

function SideBar({ theme }) {
  return (
    <div>
        <Sider
          className="kex-sider"
          theme={theme}
          width={350}
        >
        <Tree />
      </Sider>
    </div>
  )
}

export default SideBar;
