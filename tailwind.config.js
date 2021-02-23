module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  important: false,
  purge: [],
  theme: {
    fontFamily: { title: ['Markazi Text'], body: ['Montserrat'] },
    screens: {
      xsm: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },

    extend: {
      colors: {
        primary: '#00CCBA',
        second: '#22706A',
        variants: '#F08D78',
        details: '#6E8A87',
        gray: '#CFCFCF',
        body: '#f2f2f2',
      },
      fontSize: {
        '9xl': '9rem',
      },
      maxWidth: {
        10: '7rem',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '2days': 'repeat(2, minmax(0, 120px))',
        '3days': 'repeat(3, minmax(0, 120px))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        2: 'repeat(2, minmax(0, 160px))',
      },
      gridAutoRows: {
        min: 'minmax(0, 160px)',
      },
    },
  },
  variants: {},
  plugins: [],
};