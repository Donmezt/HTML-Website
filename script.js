/* Create a footer element for my pages. Make sure to have the year at the bottom and make it dynamic using JS so it keeps the website upto date.
Have a dynamic greeting at the start of your homepage that greets the user based on the time of day.Add a unique CSS element to each different time of day displayed. 
Create a button with the ID "btn-alert".
When the button is clicked, use the alert() function to display a message (for example, “Hello world!”).
Use JavaScript to change the label of the alert button, so the text of the button changes when the mouse hovers over it and then reverts when it leaves. For this feature, you might use these DOM API methods:
getElementById()
onmouseover
innerHTML or innerText
Create a new ordered list with the id "numbers" in your HTML.
Using JS, create a for loop that populates the ordered list with 12 child elements of <li>List item</li>.
Now set the <li> text with either even or odd, to appropriately match the list item's index number.

for (let i = initialValue; i <= stopValue; i = i + 1) {
  // create a new <li> element with the createElement() document method
  // (your code here)
  // set the text content of the new <li> element
  listItem.textContent = 'text';
  // append the <li> element to your ordered list
  // (your code here)
}

Bonus: find a more efficient syntax for incrementing the counter variable used in the for loop.*/

// Function to display greeting and apply styles

function displayGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const greetingElement = document.getElementById('greeting');
  let greetingText = '';
  let cssClass = '';

  if (hours < 12) {
    greetingText = 'Good morning!';
    cssClass = 'morning';
  } else if (hours >= 12 && hours < 17) {
    greetingText = 'Good afternoon!';
    cssClass = 'afternoon';
  } else {
    greetingText = 'Good evening!';
    cssClass = 'evening';
  }

  greetingElement.textContent = greetingText;
  greetingElement.className = cssClass;
}
displayGreeting();


  /* Button replies to greeting js */
const alertButton = document.getElementById('btn-alert');

alertButton.addEventListener('click', () => {
  alert('+100 luck!');
});

alertButton.addEventListener('mouseover', () => {
  alertButton.innerText = ':)';

});

alertButton.addEventListener('mouseout', () => {
  alertButton.innerText = 'Hello!';
});

/**Footer Javascripting */

const currentYear = new Date().getFullYear();
const footerText = `(c) Taner Donmez, ${currentYear}`;
document.getElementById('copyright').textContent = footerText;
console.log("Today's date is: " + new Date());











