import "./style.less"
import React, { useState } from 'react';
import { Switch } from 'antd';
import lightVars from '../../../styles/themes/light.json';
import darkVars from 'antd/dist/dark-theme';


function ThemeSwitcher({ setTheme }) {
  const [isDarkMode, setDarkMode] = useState(false);

  const changeTheme = (switchToDarkMode) => {
    setDarkMode(switchToDarkMode);
    const themeVars = switchToDarkMode ? darkVars : lightVars;
    setTheme(switchToDarkMode ? 'dark' : 'light');
    document.querySelector('body').classList.toggle('dark');
    window
     .less
     .modifyVars(themeVars)
     .then()
     .catch(e => {
         console.log('Failed to update vars ', e);
     })
  }

    return (
      <div className="theme-switch">
        <Switch
            checked={isDarkMode}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
      </div>
    );
}

export default ThemeSwitcher;
