import { icons } from '@/constants/icons'
import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const searchBar = ({placeholder, onPress}: any) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className='size-5' tintColor= "#ab8bff" resizeMode='contain'/>
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className='text-white flex-1 ml-2'
      />
    </View>
  )
}

export default searchBar
 