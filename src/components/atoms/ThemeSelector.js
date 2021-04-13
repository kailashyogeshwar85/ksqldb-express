import React, { useState } from 'react';
import { Switch } from 'antd';
import darkVars from '../../styles/themes/dark.json';
import lightVars from '../../styles/themes/light.json';


function ThemeSwitcher() {
    const [isDarkMode, setDarkMode] = useState(false);
    const changeTheme = (switchToDarkMode) => {
        setDarkMode(switchToDarkMode);
        const themeVars = switchToDarkMode ? darkVars : lightVars;
        window
            .less
            .modifyVars(themeVars)
            .then()
            .catch(e => {
                console.log('Failed to update vars ', e);
            })
    }

    return (
        <div>
            Mode:
            <Switch size="small" checked={isDarkMode} onChange={changeTheme} />
        </div>
    )
}

export default ThemeSwitcher;
