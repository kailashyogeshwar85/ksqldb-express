import { Layout, Card, Input, Button, Row, Col, Space } from 'antd';


function TextAreaCustom() {
  return (
    <Layout className="editor-container">
      <div>
        <Card className="editor" style={{width: "100%"}}>
          <Row style={{height: 220 }}>
            <Col span={22}>
            <Input.TextArea
              showCount
              defaultValue="SELECT * from USERS_S;"
              style={{height: 200}}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Space>
              <Button type="primary">Run</Button>
              <Button type="ghost">Clear</Button>
              </Space>
            </Col>
          </Row>
        </Card>
      </div>
    </Layout>
  );
}

export default TextAreaCustom;
