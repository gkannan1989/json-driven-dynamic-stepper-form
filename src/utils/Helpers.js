import React from 'react';

const Helpers = {
    getStateTree:  (state, stateKeys) => {
        let response = [];
        for(const step of stateKeys) {
            state[step].map((data, idx) => {  
            const res = {
                checkbox : `${data.label} => ${data.isChecked}`,
                text : `${data.label} => ${data.value}`,
                select: `${data.label} => ${data.optionValue}`
            }
            return response.push(<div key={step + idx}>
                    {JSON.stringify(res[data.type])}
                </div>)
            })
        }
        return response;
    }
}
 
export default Helpers;