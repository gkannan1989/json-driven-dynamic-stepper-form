import React from "react";

// Store Context is the global context that is managed by reducers.
// dynamic elements JSON, you can add any number of steps and elements to see in UI
const Store = React.createContext({
    "step1":[
       {
          "id":1,
          "type":"select",
          "label":"Country", 
          "options":[
             "USA",
             "Germany",
             "India"
          ],
          "optionValue":"USA"
       },
       {
          "id":2,
          "type":"select",
          "label":"State", 
          "options":[
             "California",
             "Texas",
             "New Jersey"
          ],
          "optionValue":"Texas"
       },
       {
          "id":3,
          "type":"select",
          "label":"City", 
          "options":[
             "Los Angels",
             "San Dieago",
             "Fresno"
          ],
          "optionValue":"Fresno"
       }
    ],
    "step2":[
       {
          "id":1,
          "type":"checkbox",
          "name":"Number",
          "label":"Place 1",
          "isChecked":false
       },
       {
          "id":2,
          "name":"Number",
          "type":"checkbox",
          "label":"Place 2",
          "isChecked":false
       },
       {
         "id":3,
         "name":"Number",
         "type":"checkbox",
         "label":"Place 3",
         "isChecked":false
      }
    ],
    "step3":[
       {
          "id":1,
          "type":"text",
          "label":"First Name",
          "name":"firstName",
          "value":""
       },
       {
          "id":2,
          "type":"text",
          "label":"Last Name",
          "name":"lasttName",
          "value":""
       },
       {
          "id":3,
          "type":"text",
          "label":"Email",
          "name":"email",
          "value":""
       }
    ]
 });

export default Store;
