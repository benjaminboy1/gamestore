import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({selectionMode, option1, option2, onSelectSwitch}) => {

    const [getSelectionMode, setSelectionMode] = useState (selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

  return (
    <View style={{
        height:44,
        width: '100%',
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        borderColor: '#ADA50AF',
        flexDirection: 'row',
        justifyContent: 'center'
    }}>
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
            flex:1,
            backgroundColor: getSelectionMode == 1 ? '#16324F' : '#e5e5e5',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
      <Text style={{
        color: getSelectionMode == 1 ? 'white' : '#16324F',
        fontSize: 14,
      }}>{option1}</Text>

        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
            flex:1,
            backgroundColor: getSelectionMode == 2 ? '#16324F' : '#e5e5e5',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
      <Text style={{
        color: getSelectionMode == 2 ? 'white' : '#16324F',
        fontSize: 14,
      }}>{option2}</Text>

        </TouchableOpacity>
    </View>
  )
}


export default CustomSwitch;