import Navbar from './components/Navbar'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Navbar />
    </NavigationContainer>
  )
}
