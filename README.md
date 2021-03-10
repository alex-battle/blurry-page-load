# blurry-page-load

Demo Link:


Upon load background image starts off blurred and as percentage gets close to 100% background image is clear and percentage disappears.

Notes
-The higher the pixels of the blur, the blurrier the image is.

-Stack overflow snippet
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

"
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
"