const color = {
  primary: {
    light: '#494365',
    main: '#1B143F',
    dark: '#150F31',
  },
  secondary: {
    main: '#FBD051',
    dark: '#F4B623',
  },
  error: {
    light: '#FFE9DD',
    main: '#F86051',
    dark: '#F7412F',
  },
  text: {
    primary: '#1B143F',
    secondary: '#494365',
  },
  common: {
    white: '#fff',
  },
  grey: {
    lightest: '#f7f7f7',
    light: '#E5E5E5',
  },
  green: {
    main: '#7EAD7F',
    light: '#F4FFF1',
  },
  yellow: {
    main: '#FBD051',
    dark: '#F4B623',
  },
  blue: {
    lightest: '#F0F3FF',
    main: '#3E67E8',
    dark: '#3259D4',
  },
}

const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
}

const theme = {
  color: color,
  spacing: spacing,

  background: {
    primary: color.grey.lightest,
    secondary: color.common.white,
  },
  typography: {
    size: {
      h1: '40px',
      h2: '24px',
      h3: '20px',
      h4: '18px',
      h5: '16px',
      h6: '14px',
      body1: '16px',
      body2: '14px',
      caption: '12px',
    },
    lineHeight: {
      h1: '55px',
      h2: '26px',
      h3: '24px',
      h4: '20px',
      h5: '16px',
      h6: '14px',
      body1: '20px',
      body2: '20px',
      caption: '16px',
    },
    weight: {
      regular: 'Nunito_400Regular',
      medium: 'Nunito_500Medium',
      semiBold: 'Nunito_600SemiBold',
      bold: 'Nunito_700Bold',
    },
    color: {
      primary: color.text.primary,
      secondary: color.text.secondary,
      white: color.common.white,
      blue: color.blue.main,
      yellow: color.secondary.dark,
    },
  },
  button: {
    color: {
      primary: color.text.primary,
    },
    padding: {
      medium: spacing[3],
      large: spacing[6],
    },
  },
  borderRadius: {
    small: spacing[2],
    medium: spacing[4],
    large: spacing[8],
  },
}

export default theme
