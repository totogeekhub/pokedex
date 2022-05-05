import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native'

export default function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  },
  profile: {
      flexDirection: 'row',
      backgroundColor: '#EEE',
  },
  imageProfile: {
      width: 34,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 44/2,
      marginLeft: 10,
      height: 34
  },
  name: {
      alignSelf: 'center',
      marginLeft: 10,
      fontSize: 16
  }
});