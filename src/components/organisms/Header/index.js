import './style.less';
import { Row, Col } from 'antd';
import Logo from 'components/atoms/Logo';
import Menu from 'components/atoms/Menu';
import ThemeSwitch from 'components/atoms/ThemeSwitch';


const Header = ({ setTheme }) => {
  return (
    <Row className="app-header">
      <Col span={2}>
        <Logo />
      </Col>
      <Col span={18}>
        <Menu/>
      </Col>
      <Col span={1} offset={2}>
        <ThemeSwitch setTheme={setTheme} />
      </Col>
    </Row>
  );
}

export default Header;
