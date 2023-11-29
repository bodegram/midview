import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ForgotPassword from './ForgotPassword'
import Reset from './ResetPassword'

export default function ResetPassword() {
    const [step, setStep] = useState(1)
    const [values, setValues] = useState({
        email: ''
    })

    const onChange = (item) =>{
       setValues({...values, ...item})
       setStep(step=>step + 1)
    }

    switch(step){
        case 1:
            return <ForgotPassword/>

        case 2:
            return <Reset/>
    }
}