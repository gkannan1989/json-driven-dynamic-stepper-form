import React, { memo, lazy } from 'react';  
const InputCheckBox = lazy(() => import('../components/InputCheckBox/InputCheckBox'));  
const InputText = lazy(() => import('../components/InputText/InputText')); 
const SelectBox = lazy(() => import('../components/SelectBox/SelectBox'));   
 
/**
 * Function represents the Element Factory component
 * @memberOf src.components.ElmFactory
 * @function ElmFactory
 * @description It renders the elements dynamically in the form of JSON from store/context.js   
 * @return {jsx} - jsx component to show 
 * @example
 *    <ElmFactory 
        elmProps, 
        changeSelect, 
        toggleCheckBox, 
        updateInput
    />
 */
const ElmFactory = memo(({
        elmProps, 
        changeSelect, 
        toggleCheckBox, 
        updateInput
    }) => {
    return elmProps && elmProps.length && elmProps.map((prop, idx) => {
        const element = {
            checkbox : 
                <InputCheckBox 
                    {...prop} 
                    key={idx} 
                    onClick={(e) => toggleCheckBox(e)} />,   
            text : 
                <InputText 
                    {...prop} 
                    key={idx}
                    onChange={(e) => {updateInput(e)}}/>, 
            select :  
                <SelectBox 
                    {...prop} 
                    key={idx}
                    onChange={(e) => changeSelect(e)}/> 
        }
        return element[prop.type]
    })
})
export default ElmFactory;