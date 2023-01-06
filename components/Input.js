import { StyleSheet, TextInput } from 'react-native'

const Input = ({ textInputValue, setTextInputValue }) => {
  return (
    <TextInput
      multiline
      style={styles.textField}
      onChangeText={(text) => setTextInputValue(text)}
      value={textInputValue}
      placeholder='Skriv din text här...'
    />
  )
}

export default Input

const styles = StyleSheet.create({
  textField: {
    maxHeight: 100,
    padding: 10,
    height: 65,
    borderColor: 'grey',
    borderWidth: 1,
    placeholderTextColor: 'gray',
    borderRadius: '10',
    backgroundColor: 'white',
  },
})
