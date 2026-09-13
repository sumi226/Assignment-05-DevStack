1.The Name of my  project is “Assignment – 05 - DevStack” 

2.Its is a modern web application where user can explore different technologies and build their own technology stack.

3 features of my projects are :- 

    •	Explore different technologies
    •	Technology details including category, difficulty, and rating
    •	Remove individual technologies

1. What is JSX, and why is it used in React?

Answer: JSX stands for JavaScript XML. React uses JSX because it makes the UI easier to write and understand. We can also use JavaScript expressions directly inside JSX using {}.

2. What is the difference between props and state?

Answer: Props are data passed from a parent component to a child component. Props are read-only.
State is data that is managed inside a component and can change over time.

3. What does the useState hook do, and where did you use it in this project?

Answer: The useState hook is used to create and manage state in a React functional component.
I used useState in App.tsx to store the technologies selected by the user.

const [stack, setStack] = useState<ITechnology[]>([]);

Here:
•	stack contains the selected technologies.
•	setStack updates the selected technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Answer: UseEffect is used to perform side effects in React, such as fetching data, setting up event listeners, or working with external APIs.
However, I did not use useEffect in this project.
approach to load the JSON data.

5. Why does every item in a .map() list need a unique key prop?

Answer: A key helps React identify each item in a list uniquely.
When the list changes, React uses the key to understand which item was added, removed, or updated. This helps React update the DOM efficiently.
I used technology.id because it is unique for each technology.

6. What is conditional rendering? Show one place you used it. 

Answer:Conditional rendering means displaying different UI depending on a condition.
I used it in the Stack component to show an empty message when no technology is selected.
{stack.length === 0 ? (
  <div>
    <p>No technologies selected yet.</p>
    <p>Add technologies from the list.</p>
  </div>
) : (
  <div>
    {stack.map((technology) => (
      ...
    ))}
  </div>
)}

When stack.length === 0, the empty message is displayed.
When the stack contains technologies, the selected technologies are displayed instead.
I also used conditional rendering for the Remove All button:
{stack.length > 0 && (
  <button>Remove All</button>
)}
So the button only appears when there is at least one selected technology.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer:A parent sends data to a child through props.
In my project, App.tsx is the parent and Stack.tsx is the child.
A child can send information or trigger an action in the parent by calling a callback function passed as a prop.
So the flow is:
Parent → sends data/function through props → Child → calls callback → Parent updates state
