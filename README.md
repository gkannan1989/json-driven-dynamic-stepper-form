 # Dynamic JSON driven stepper form

This stepper form is fully driven by the JSON configured on (src/store/context.js), both number of steps and form elements can be configurable which will ensure zero dependency and 100% reusability. Adding to that its implemented with React latest hooks :)

## Install     
Step 1: npm install

Step 2: npm run start

##  Tech Stack
1. React
2. React hooks (useState, useReducer, memo, useContext and useEffect) 
4. Custom hooks(useEffect) for usePersistedContext 
5. Lazy - We are using to load the component when ever needed asynchronously 

Please note: This release, we have not much focused on UI part, validation and test cases and focused only on skeleton.

## Demo 

<a href="https://www.loom.com/share/b3dbdcf6077f4acf9326c7fd477f824e"> <p>Step by Step Form - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/b3dbdcf6077f4acf9326c7fd477f824e-with-play.gif"> </a>

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

### Sample JSON - you can play with this path src/store/context.js

```
"step" - determine each step form - you can add N number of forms
"type" - its a key for driving / picking correct Atom (eg: type: "text", type: "select" and type: "checkbox")
```

#### Please note: as of now we have only three Atom (InputCheckbox, InputSelect and InputBox) which can be configured dynamically. 

Sample JSON
```
{
  "step1": [
    {
      "id": 1,
      "type": "select",
      "label": "Country",
      "options": [
        "USA",
        "Germany",
        "India"
      ],
      "optionValue": "USA"
    },
    {},
    {}
  ],
  "step2": [
    {
      "id": 1,
      "type": "checkbox",
      "name": "Number",
      "label": "Place 1",
      "isChecked": false
    },
    {},
    {}
  ],
  "step3": [
    {
      "id": 1,
      "type": "text",
      "label": "First Name",
      "name": "firstName",
      "value": ""
    },
    {},
    {}
  ]
}
```



