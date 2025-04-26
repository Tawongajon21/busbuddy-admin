import React from 'react'
import { useState } from 'react'
import Modal from './Modal';
function Multistep() {
const [isOpen, setisOpen] = useState(false);
const [currentStep, setcurrentStep] = useState(1);
const handleOpen=()=>{
    setisOpen(true)
}
const handleClose=()=>{
    setisOpen(false)
}
const handleNextStep=()=>{
    setcurrentStep(currentStep+1)
}
const handlePrevStep=()=>{
    setcurrentStep(currentStep-1)
}

  return (
    <div >
<button onClick={()=>handleClose}>
    Open Modal
</button>
<Modal isOpen={isOpen} onClose={handleClose}>
{
    currentStep===1&&(
        <Step1 handleNextStep={handleNextStep}/>
    )
}
{
    currentStep===2&&(
        <Step2 handlePrevStep={handlePrevStep} handleNextStep={handleNextStep}/>
    )
}
{
    currentStep===3&&(
        <Step2 handlePrevStep={handlePrevStep} handleNextStep={handleNextStep}/>
    )
}
</Modal>
    </div>
  )
}

export default Multistep