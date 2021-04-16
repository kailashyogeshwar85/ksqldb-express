// import 'antd/dist/antd.css'
import 'styles/app.less';
import React, { useState } from 'react';
import { KExpressWrapper } from 'components/organisms';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <KExpressWrapper
          theme={theme}
          setTheme={setTheme}
      />
    </div>
  );
}

export default App;
