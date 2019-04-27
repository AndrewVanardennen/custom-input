export default [
	// iife , for older browsers
  {
    input: 'src/custom-input.js',
    output: {
      file: 'custom-input.js',
      name: 'customInput',
      format: 'iife',
      sourcemap: false
    },
    experimentalCodeSplitting: false,
    experimentalDynamicImport: false
  }
]
