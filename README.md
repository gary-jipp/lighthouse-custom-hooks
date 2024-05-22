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


* Building your own Hooks lets you extract component logic into reusable functions.

* Custom hooks let us move repetitive or complex code out of our components

* Pulls "logic" out of your component not "visuals"

* You can think of Custom hooks as "helper functions" for React

* Custom hooks usually use other React hooks (useState, useEffect, etc)

* Normal helper functions cannot use Hooks. Only Custom Hooks can do that

* React Rule: React Hooks must start with the prefix "use"

* Multiple instances of the same custom hook do not share state

* A Custom Hook can return anything you want (value, array, object, func