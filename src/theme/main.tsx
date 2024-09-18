// import React, { useState } from 'react';
// import { Grommet, Box, Button } from 'grommet';
// import chroma from 'chroma-js';
// import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';

// // Function to generate theme colors using chroma-js and Material Design utilities
// const generateThemeColors = (primaryColor: string, secondaryColor?: string) => {
//   // Material Design utility for generating a full theme based on a primary color
//   const primaryArgb = argbFromHex(primaryColor);
//   const materialTheme = themeFromSourceColor(primaryArgb);

//   // Generate secondary colors if provided, else use derived values
//   const secondaryArgb = secondaryColor ? argbFromHex(secondaryColor) : null;
//   const secondaryMaterial = secondaryColor ? themeFromSourceColor(secondaryArgb) : null;

//   // Chroma.js for creating shades and tints
//   const primaryPalette = chroma.scale([primaryColor, 'white']).mode('lab').colors(5);
//   const secondaryPalette = secondaryColor ? chroma.scale([secondaryColor, 'white']).mode('lab').colors(5) : primaryPalette;

//   return {
//     global: {
//       colors: {
//         brand: primaryPalette[2],
//         background: primaryPalette[4],
//         'background-back': primaryPalette[4],
//         'background-front': primaryPalette[3],
//         'background-contrast': primaryPalette[0],
//         text: primaryPalette[1],
//         'text-strong': primaryPalette[0],
//         'text-weak': primaryPalette[3],
//         icon: primaryPalette[1],
//         border: chroma(primaryPalette[1]).alpha(0.33).css(),
//         control: primaryPalette[2],
//         'accent-1': secondaryPalette[2],
//         focus: materialTheme.schemes.light.primary,
//         'status-critical': '#FF4040',
//         'status-error': '#B30000',
//         'status-warning': '#FFAA15',
//         'status-ok': '#00C781',
//         'status-unknown': '#CCCCCC',
//         'status-disabled': '#CCCCCC',
//       },
//     },
//   };
// };

// function ThemeSelector() {
//   const [primaryColor, setPrimaryColor] = useState('#7D4CDB');
//   const [secondaryColor, setSecondaryColor] = useState('');
//   const [theme, setTheme] = useState(generateThemeColors(primaryColor));

//   const handleGenerateTheme = () => {
//     const newTheme = generateThemeColors(primaryColor, secondaryColor);
//     setTheme(newTheme);
//   };

//   return (
//     <Grommet theme={theme}>
//       <Box pad="medium">
//         <input
//           type="color"
//           value={primaryColor}
//           onChange={(e) => setPrimaryColor(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <input
//           type="color"
//           value={secondaryColor}
//           onChange={(e) => setSecondaryColor(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <Button label="Generate Theme" onClick={handleGenerateTheme} />
//       </Box>
//     </Grommet>
//   );
// }

// export default ThemeSelector;
