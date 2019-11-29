import React, { memo, lazy, Suspense, useContext, useState } from 'react';
import Store from '../store/context'; 
import { Constants as C } from '../constants/constants';
import Helpers from '../../src/utils/Helpers';
const Button = lazy(() => import('../components/Button/Button')); 
const ElmFactory = lazy(() => import('../components/ElmFactory'));   

/**
 * Function represents the Form containner
 * @memberOf src.containers.Form
 * @function Form
 * @description It renders the dynamic form and bind events along with buttons
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
      return Helpers.getStateTree(state, stateKeys)
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
