module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    fontSize: {
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
      'zircon': '#e1e2e2'
    }),

    borderColor: theme => ({
      ...theme('colors'),
      // default: theme('colors.gray.300', 'currentColor'),
      'primary': '#00a1c6',
      'secondary': '#435967',
      'danger': '#e3342f',
      'gray': '#ccc',
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
