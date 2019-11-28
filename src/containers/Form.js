import React, { memo, lazy, Suspense, useContext, useState } from 'react';
import Store from '../store/context'; 
import { Constants as C } from '../constants/constants'
const Button = lazy(() => import('../components/Button/Button')); 
const ElmFactory = lazy(() => import('../components/ElmFactory'));   

/**
 * Function represents the Form containner
 * @memberOf src.containers.Form
 * @function Form
 * @description It renders the dynamic form along with buttons
 * @return {jsx} - jsx containner to show 
 * @example
 *    <Form />
 */
const Form = memo(() => { 
    const [ currentStep, nextStep ] = useState(1); 
    const { state, dispatch } = useContext(Store);
    const stateKeys = Object.keys(state);
    const totalSteps = stateKeys.length; 
    const stepLabel = `STEP - ${currentStep}`;

    const toggleCheckBox = (e) => { 
      dispatch({type: C.TOGGLE_CHECKBOX,  
              payload: { 
                value: e.target.value,  
                progress: currentStep,  
                key: e.target.id 
            }}) 
    } 
    const changeSelect = (e) => {
      dispatch({type: C.CHANGE_SELECT,  
              payload: { 
                value: e.target.value,  
                progress: currentStep,  
                key: e.target.id 
            }})
    }
    const updateInput = (e) => {
      dispatch({type: C.UPDATE_INPUT,  
              payload: { 
                value: e.target.value,  
                progress: currentStep,  
                key: e.target.id 
            }})  
    }

    /** when tapping finish button below function will render state tree*/
    const RenderStateTree = () => {
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

    return ( 
        (currentStep <= totalSteps ?
          (<> 
            <span className='titleElm'>
                {stepLabel}
            </span>
            <Suspense fallback={<div>{C.LOADING}</div>}>  
                <ElmFactory  
                    elmProps={state[`step${currentStep}`]}  
                    changeSelect={changeSelect} 
                    toggleCheckBox={toggleCheckBox}
                    updateInput={updateInput}  
                /> 
                <Button 
                    onClick={() => nextStep(currentStep + 1)}
                    text={(currentStep === totalSteps) ? C.FINISH : C.NEXT}
                />
            </Suspense>  
            </>) : 
          <RenderStateTree />)
          
    )
})
export default Form;
