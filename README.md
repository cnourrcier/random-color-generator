# Random Color Generator

This project demonstrates a React component designed to generate random colors and display them on the screen. It utilizes React's useState hook for managing state and rendering updates. The component allows users to generate colors in either hexadecimal (hex) or RGB format.


## generateRandomNumber function: 

This function generates a random integer between 0 (inclusive) and the specified length (exclusive). It utilizes Math.random() to generate a random decimal between 0 (inclusive) and 1 (exclusive), then multiplies it by the specified length and floors the result to obtain an integer value within the desired range.

## handleChooseRandomColor function: 

This function is called when the user clicks a button to generate a random color. It checks the current color type state (colorType) to determine whether to create a random color in hexadecimal or RGB format. If the color type is "hex", it calls handleCreateHex(); otherwise, it calls handleCreateRgb().

## handleCreateHex function: 

This function generates a random hexadecimal color value. It first sets the color type state (colorType) to "hex". Then, it initializes an array containing hexadecimal digits and iterates six times to randomly select digits from the array and concatenate them to form a valid hexadecimal color string (starting with '#'). Finally, it sets the color state (color) to the generated hexadecimal color value.

## handleCreateRgb function: 

Similar to handleCreateHex, this function generates a random RGB color value. It sets the color type state (colorType) to "rgb" and generates random values for red (r), green (g), and blue (b) components using the generateRandomNumber function. It then constructs an RGB color string using these values and sets the color state (color) accordingly.

## handleCreateHsl function: 

This function is called to create an HSL color value. If the current color type is "hex", it first converts the hexadecimal color value to RGB using the hexToRgb function. Then, it converts the RGB color value to HSL using the rgbToHsl function. If the current color type is "rgb", it directly converts the RGB color value to HSL. Finally, it returns the HSL color value.

## rgbToHsl function: 

This function converts an RGB color value to an HSL color value. It first normalizes the RGB values by dividing each by 255. Then, it determines the maximum and minimum values among the normalized RGB values. Based on these values, it calculates the hue (h), saturation (s), and lightness (l) components of the HSL color. If the maximum and minimum RGB values are the same, it's an achromatic color (i.e., grayscale), and both hue and saturation are set to 0. Otherwise, it calculates the hue based on the maximum value and the difference between the maximum and minimum values. Finally, it returns the HSL color value as a string.

## hexToRgb function: 

This function converts a hexadecimal color value to an RGB color value. It first handles shorthand hex values by expanding them to their full form (e.g., #abc becomes #aabbcc). Then, it matches the full hex value and extracts the red (r), green (g), and blue (b) components using regular expressions. It converts these components from hexadecimal to decimal and returns the RGB color value as a string.

## adjustLightness function: 

This function adjusts the lightness component of an HSL color value to make it more visible. It takes an HSL color value as input, increases its lightness by 50%, and returns the modified HSL color value.

## handleDisplayColorLabel function: 

This function is responsible for displaying the color label in the UI. It calls handleCreateHsl to obtain the HSL color value, then renders the color label text (including the color type and value) and applies inline styling to set the color of the text to the computed HSL color value.