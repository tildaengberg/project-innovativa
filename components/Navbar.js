import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../config/colors'
import Home from '../screens/Home'
import Memories from '../screens/Memories'
import Post from '../screens/Post'
import Profile from '../screens/Profile'
import DailyPicChallange from '../screens/DailyPicChallenge'
import Family from '../screens/Family'
import Feed from '../screens/Feed'

const Tab = createBottomTabNavigator()

const Navbar = () => {
  const HomeStack = createStackNavigator()

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Home'
      >
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen
          name='DailyPicChallange'
          component={DailyPicChallange}
        />
        <HomeStack.Screen name='Post' component={Post} />
        <HomeStack.Screen name='Family' component={Family} />
        <HomeStack.Screen name='Feed' component={Feed} />
      </HomeStack.Navigator>
    )
  }

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
      <Tab.Screen name='Hem' component={HomeStackScreen} />
      <Tab.Screen name='Minnen' component={Memories} />
      <Tab.Screen name='Inlägg' component={Post} />
      <Tab.Screen name='Profil' component={Profile} />
    </Tab.Navigator>
  )
}

export default Navbar
