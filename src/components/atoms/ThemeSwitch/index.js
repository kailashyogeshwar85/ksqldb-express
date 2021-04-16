import "./style.less"
import React, { useState } from 'react';
import { Switch } from 'antd';
import darkVars from '../../../styles/themes/dark.json';
import lightVars from '../../../styles/themes/light.json';
import darkTheme from 'antd/dist/dark-theme';


function ThemeSwitcher({ setTheme }) {
  const [isDarkMode, setDarkMode] = useState(false);

  const changeTheme = (switchToDarkMode) => {
    setDarkMode(switchToDarkMode);
    const themeVars = switchToDarkMode ? darkTheme : lightVars;
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
