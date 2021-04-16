import { Layout } from 'antd';
import { Header, Sidebar } from 'components/organisms'
import { QueryEditor, QueryResult } from 'components/molecules';

const { Content } = Layout;

function KExpressWrapper({ theme, setTheme }) {
  return (
      <Layout>
        <Header theme={theme} setTheme={setTheme} />
        <Layout className="site-layout">
          <Sidebar theme={theme} setTheme={setTheme} />
          <Content className="content-wrapper">
            <QueryEditor theme={theme}/>
            <QueryResult />
          </Content>
        </Layout>
      </Layout>
  );
}

export default KExpressWrapper;
