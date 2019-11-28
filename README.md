 # Dynamic JSON driven stepper form

This stepper form is fully driven by the JSON configured on (src/store/context.js), both number of steps and form elements can be configured which will ensure zero dependency and 100% reusability.

## Install     
Step 1: npm install

Step 2: npm run start

##  Tech Stack
1. React
2. React hooks (useState, useReducer, useContext, useEffect, lazy, and memo) 
4. Custom hooks(useEffect) for usePersistedContext 

Please note: This release, we have not much focused on UI part, validation and test cases and focused only on skeleton.

## Principles
ATOMIC design

## Folder Structure 

### Atom
    src/components/Button
    src/components/InputCheckBox
    src/components/InputText
    src/components/SelectBox

### Element Factory (JSON driven dynamic Atom dispatcher)
    src/components/ElmFactory.js 

### Molecules / Template
    src/containers/Form.js

### Pages
    src/index.js

### Store
    src/store/context.js
    src/store/reducer.js
    src/store/usePersist.js
### CSS
    src/css/index.css

### Constants
    src/constants/constants.js


