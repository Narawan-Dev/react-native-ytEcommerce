import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function FullRoundButtonComp({ image, bg }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: bg,
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
        }}
      >
        <Image source={image} style={{ width: 20, height: 20 }} />
      </View>
    </TouchableOpacity>
  );
}
