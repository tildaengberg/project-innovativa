import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../config/colors'
import Home from '../screens/Home'
import Memories from '../screens/Family'
import Post from '../screens/Post'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName

          if (route.name === 'Hem') {
            iconName = focused ? 'ios-home' : 'ios-home-outline'
          }
          if (route.name === 'Minnen') {
            iconName = focused
              ? 'ios-reload-circle'
              : 'ios-reload-circle-outline'
          }
          if (route.name === 'Inlägg') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline'
          }
          if (route.name === 'Profil') {
            iconName = focused
              ? 'ios-person-circle'
              : 'ios-person-circle-outline'
          }
          return <Ionicons name={iconName} size={30} color={color} />
        },
        tabBarActiveTintColor: colors.yellow.main,
        tabBarInactiveTintColor: colors.grey.main,
      })}
    >
      <Tab.Screen name='Hem' component={Home} />
      <Tab.Screen name='Minnen' component={Memories} />
      <Tab.Screen name='Inlägg' component={Post} />
      <Tab.Screen name='Profil' component={Profile} />
    </Tab.Navigator>
  )
}

export default Navbar
