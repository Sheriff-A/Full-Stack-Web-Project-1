import React from 'react'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles, lightTheme, darkTheme} from '../../styles/globalStyle'
import {useDarkMode} from '../../utils/useDarkMode'

// Page
import {DarkModePage} from './DarkModePage'

export const DarkMode = () => {
    const [theme, toggleTheme] = useDarkMode()
    const themeMode = theme === 'dark' ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <DarkModePage theme={theme} toggleTheme={toggleTheme} />
        </ThemeProvider>
    )
}
