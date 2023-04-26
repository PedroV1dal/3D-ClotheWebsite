import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#FF5733',
          '#FFC300',
          '#DAF7A6',
          '#FFC0CB',
          '#FDEDEC',
          '#3498DB',
          '#AF7AC5',
          '#7D6608',
          '#2ECC71',
          '#F5B7B1',
          '#F9E79F',
          '#A9CCE3',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker