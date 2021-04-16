import { Layout } from 'antd';
import { Header, Sidebar } from 'components/organisms'
import { QueryEditor, QueryResult } from 'components/molecules';

const { Content, Sider  } = Layout;

function KExpressWrapper({ theme, setTheme }) {
  return (
      <Layout >
        <Header theme={theme} setTheme={setTheme} />
        <Layout class="site-layout">
          <Sidebar theme={theme} setTheme={setTheme} />
          <Content className="content-wrapper">
            <QueryEditor />
            <QueryResult />
          </Content>
        </Layout>
      </Layout>
  );
}

export default KExpressWrapper;
