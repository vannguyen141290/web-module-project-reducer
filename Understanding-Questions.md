# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* the action type ADD_ONE will be dispatched
* Dispatched action type is passed into reducer
* Reducer looks for the action type ADD_ONE and returns an updated state with the total increased by 1.
* The updated state made the the DOM re-render with the total increased by 1
* TotalDisplay shows the total plus 1.
