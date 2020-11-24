module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    fontSize: {
      fs10: ['10px', '15px'],
      sm: ['12px', '17px'],
      fs13: ['13px', '18px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#00a1c6',
      'secondary': '#435967',
      'danger': '#e3342f',
      'disable': '#999999',
      'alert-danger': '#ee3557',
      'alert-success': '#38b55e',
      'alert-info': '#27a9e1',
      'alert-warning': '#f7931d',
      'solitude': '#E9EAEB',
      'palegray': '#EDEDED',
      'zircon': '#e1e2e2',
      'nobel': '#999999',
      'salmon': '#F5846F',
      'statusEnrolled': '#9CC13B',
      'statusPending': '#F4AE1C',
      'statusUnenrolled': '#AFAEB4',
      'statusScheduled': '#ffa300',
      'statusRunning': '#FFCC00',
      'statusCompleted': '#a2bc03',
      'statusCanceled': '#A8A8A8',
      'statusShared': '#a1bc00',
      'statusNoShared': '#999999',
      'severityCritical': '#A0000F',
      'severityhigh': '#f00',
      'severitymedium': '#FDBA42',
      'severitylow': '#FFF42D',
      'pattensBlue': '#D0D6D9'
    }),

    borderColor: theme => ({
      ...theme('colors'),
      // default: theme('colors.gray.300', 'currentColor'),
      'primary': '#00a1c6',
      'secondary': '#435967',
      'danger': '#e3342f',
      'gray': '#ccc',
      'statusEnrolled': '#9CC13B',
      'statusPending': '#F4AE1C',
      'statusUnenrolled': '#AFAEB4',
      'nobel': '#999999',
      
    }),

    minHeight:theme => ( {
      '0': '0',
      '10': '2.5rem',
      
        }),

    textColor: theme => ({
      ...theme('colors'),
      'primary': '#00a1c6',
      'secondary': '#435967',
      'danger': '#e3342f',
      'nobel': '#999999',
      'gray': '#ccc',
    }),

    placeholderColor: {
      'primary': '#00a1c6',
      'secondary': '#435967',
      'danger': '#e3342f',
      'disable': '#999999',
      'alert-danger': '#ee3557',
      'alert-success': '#38b55e',
      'alert-info': '#27a9e1',
      'alert-warning': '#f7931d',
      'solitude': '#E9EAEB',
      'palegray': '#EDEDED',
      'zircon': '#e1e2e2',
      'gray': '#ccc',
    },




    extend: {
      fontFamily: {
        'source-sans-pro': ['Source Sans Pro'],
        'mitr': ['Mitr'],
        'roboto-slab': ['Roboto Slab'],
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [require("@tailwindcss/custom-forms")]//Tailwind CSS Custom Forms
}
