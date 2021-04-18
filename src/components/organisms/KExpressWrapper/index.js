import './style.less';
import { Layout, Col, Row } from 'antd';
import { Header, Sidebar } from 'components/organisms'
import { QueryEditor, QueryResult } from 'components/molecules';
const { Content, Sider, Footer } = Layout;

function KExpressWrapper({ theme, setTheme }) {
  return (
      <Layout className="kex-wrapper" style={{minHeight: '100vh'}}>
        <Header theme={theme} setTheme={setTheme}/>
        <Layout className="site-layout">
          <Sidebar theme={theme} setTheme={setTheme} />
          <Content className="content-wrapper" style={{display: 'flex', flexDirection: 'column' }}>
            <Row>
              <Col flex="auto" style={{height: '100%' }}>
                <QueryEditor theme={theme}/>
              </Col>
            </Row>
            <Row>
              <Col flex="auto">
                <QueryResult />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
  );
}


export default KExpressWrapper;
