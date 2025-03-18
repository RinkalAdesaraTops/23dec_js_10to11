import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import RtkCounterReducer from '../RTK/RtkCounterReducer'
const RtkcounterStore = configureStore({
    reducer:{
        counter:RtkCounterReducer

    }
})

export default RtkcounterStore
