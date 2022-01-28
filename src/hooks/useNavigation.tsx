import { useNavigation as useNavigationOriginal } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParams } from '../types/RootStackParams'

const useNavigation = () => {
  const navigation =
    useNavigationOriginal<NativeStackNavigationProp<RootStackParams>>()

  return navigation
}

export default useNavigation
