 
//Part 1: 30%, you must create a repo for part 1, separate from part 2
 //1. Why does React utilize the virtual-dom?
 
 React utilizes the virtual-dom because its performance is a lot faster. Virtual DOM is a virtual copy of the Real DOM. Virtual-dom is a lot faster because it is never rendered on the screen compared to Real Dom.
 
//2a How is data flowed in React ?

In React, the way that data is flowed is state is passed to the view and to child components.
  
//2b. Why is React architected this way ?
  
Because if not, it can be difficult to keep your code organized as your React project grows.
 
//3. What is the purpose for lifting state up in React? Give an example of this
 
In React, lifiting state is accomplished by moving sharing state up to the closest common ancestor of the components. 
  
Example:
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
  

//4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
 
Because it allows for a single web page application with navigation without having the page refresh as the user navigates.
React Router uses component structure to call components, which display the appropriate information.
React renders the appropriate information on the DOM using its component structure.
  
//5. Can browsers read JSX ? Why ?
  
Browsers cannot read JSX because it is not a valid JavaScript. If JavaScript files contains JSX, that file will have to be transpiled.
 
//6. What is the significance of keys in React ? 
    
The importance of keys in React comes down to identity. Keys help React identify which items have changed, been added, or been removed. Keys should be given to elements inside the array to give the elements a stable identity.
  
 
//7. What is the difference between Props and State ?
  
In props you use state to store the data and you use props to pass data down to the child components. Props is better at performance and State is worse at performance.
 
//8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
//Babel Input: ES2015 arrow function
//[1, 2, 3].map( n => n + 1 )
 
//Babel Output: ES5 equivalent
//[1,2,3].map(function(n) {
//Return n + 1;
//})

For example, ES5 introduced the arrow function:

[1, 2, 3].map((n) => n + 1)

Babel is a compiler: it takes code written in one standard, and it transpiles it to code written into another standard.

You can configure Babel to transpile modern ES2017 JavaScript into JavaScript ES5 syntax:

[1, 2, 3].map(function(n) {
  return n + 1
})

This must happen at build time.


//9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
//Show 3 test runs, with at least 2 edge cases. 
function properNames(names) {
  const listItems = names.map((name) =>
      name.charAt(0).toUpperCase()+name.substr(1)
  );
  console.log(listItems)
}
const names = ['Aurora', 'Luis', 'Jayden', 'Julissa', 'Josefina']
properNames(names)
 
//10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
//Show 3 test runs, with at least 2 edge cases. 
function smallWordsOnly(arr) {
  let newArray = array.filter(function(item) {
      if(item.length<=6){
          return item
      }
  });
  console.log(newArray)
}
const array = ['James', 'John', 'Paul', 'Ringo', 'George','Kaamran','Jaaames'];
smallWordsOnly(array)