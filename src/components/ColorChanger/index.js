import React from 'react'

import {Picker} from './Picker'
import {Switch} from './Switch'
import {InputColor as Input} from './InputColor'
import {OutputColor as Output} from './OutputColor'


export const ColorChanger = () => {
  return (
    <div>
      <Picker />
      <Switch />
      <Input />
      <Output />
    </div>
  )
}
