## Custom Hooks

## Topics
- [ ] Concept Review
- [ ] React Hooks
- [ ] What are Custom Hooks
- [ ] Why Custom Hooks are useful
- [ ] Custom Hooks & State
- [ ] Return value from a Custom Hook
- [ ] Custom Hook Examples

## Notes

React Hooks Rules
 - hooks must be called in the same order
 - they can only be used inside Components (or other hooks)
 - start with `use`

 Custom Hooks are helper functions for React
  - they can call other hooks

What is a Component
 -  function returns JSX
What is a Render?
 - run the function (component)
What causes a Render?
- change in state
- stale state


- setCount(3) -> renders!
- setCount(3) ->no render

const array = [1,2,3]
setArray(array) -> render
array.push(4)
setArray(array) -> render

const eqArrays = function(arr1, arr2) {

  if(arr1 === arr2) {
    return ;
  }

// all the stuff

}
