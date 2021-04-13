// import 'antd/dist/antd.css'
import 'styles/app.less';
import { Card, Button } from 'antd';
import ThemeSelector from './components/atoms/ThemeSelector';


function App() {
  return (
    <div className="App">
      <div>
        <ThemeSelector />
      </div>
      <Button type="primary">Primary</Button>
      <Card
        hoverable
        style={{ width: 240 }}
      >
      <div className="colors">
        <div className="color-row">
          <div className="color-item primary">
            <div className="color-item-content">
              Successful
            </div>
          </div>
          <div className="color-item success">
            <div className="color-item-content">
              Success
            </div>
          </div>
          <div className="color-item info">
            <div className="color-item-content">
              Info
            </div>
          </div>
          <div className="color-item warning">
            <div className="color-item-content">
              Warning
            </div>
          </div>
          <div className="color-item error">
            <div className="color-item-content">
              Error
            </div>
          </div>
          <div className="color-item body-background">
            <div className="color-item-content">
              Body Background
            </div>
          </div>
        </div>
      </div>
      </Card>,
    </div>
  );
}

export default App;
