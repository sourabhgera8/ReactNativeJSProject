import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("SetItem error ", error)
    return null;
  }
}