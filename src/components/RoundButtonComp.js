import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

export default function RoundButtonComp({ label, border = false, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 120,
          backgroundColor: border ? 'white' : '#034ef7',
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 20,
          marginLeft: 10,
          borderColor: 'black',
          borderWidth: border ? 1 : 0,
        }}
      >
        <Text
          style={{
            color: border ? 'black' : 'white',
            textAlign: 'center',
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
