import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    .enable-dark-mode{
        background: ${({theme}) => theme.body2};
        color: ${({theme}) => theme.text};
        transition: .5s linear;
    }

    #toggle-button {
        background: ${({theme}) => theme.bgColor};
    }

    #toggle-button .indicator {
        background: linear-gradient(to bottom, ${({theme}) => theme.buttonColor2}, ${({theme}) => theme.buttonColor});
    }

    #source-link {
        color: ${({theme}) => theme.text};
        transition: .5s linear
    }
`

export const lightTheme = {
    body: '#A6A6A6',
    body2: '#BFBFBF',
    bodyT: 'rgba(191,191,191,0.2)',
    text: '#0D0D0D',
    bgColor: '#eee',
    buttonColor: '#f9f9f9',
    buttonColor2: '#e0e0e0'
}

export const darkTheme = {
    body: '#262626',
    body2: '#0D0D0D',
    bodyT: 'rgba(13,13,13,0.8)',
    text: '#F2F2F2',
    bgColor: '#222',
    buttonColor: '#222',
    buttonColor2: '#444'
}