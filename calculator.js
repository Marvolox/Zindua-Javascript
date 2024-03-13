function calculate() {

let length = document.getElementById("length")

let width = document.getElementById("width")

if (length === '' || width === '' || length <= 0 || width <= 0) {
    document.getElementById('result').innerHTML = '<p>Please enter valid values for length and width.</p>';
    return;
  }

let area = length*width

let perimeter = 2*(length+width)

document.getElementById('result').innerHTML = `
<p>Area: ${area}</p>
<p>Perimeter: ${perimeter}</p>
`;

}