import AsyncStorage from '@react-native-async-storage/async-storage'
import { uniq } from 'lodash'

export const KEY_APP_ANSWERS_INCORRECT = 'app-answers-incorrect'
export const KEY_APP_ANSWERS_MARKED = 'app-answers-marked'
export const KEY_APP_RANDOM_NUMBER = 'app-random-number'

export const setStorageSingleValue = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

export const getStorageSingleValue = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    console.log(e)
  }
}

export const setStorageObjectData = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
  }
}

export const getStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log(e)
  }
}

export const removeStorageData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e)
  }
}

export const getStorageDateMultiple = async (keys: string[]) => {
  try {
    const values = await AsyncStorage.multiGet(keys)
    return values
  } catch (e) {
    console.log(e)
  }
}

export const addStorageArrayValue = async (key: string, id: string) => {
  const currentIncorrectAnswers = (await getStorageData(key)) || []
  const newIncorrectAnswers = [...currentIncorrectAnswers, id]
  setStorageObjectData(key, uniq(newIncorrectAnswers))
}

export const removeStorageArrayValue = async (key: string, id: string) => {
  const currentIncorrectAnswers = (await getStorageData(key)) || []
  const newIncorrectAnswers = currentIncorrectAnswers.filter(
    (answerId: string) => answerId !== id
  )

  setStorageObjectData(key, newIncorrectAnswers)
}
