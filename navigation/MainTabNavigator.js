import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Categories from "../screens/Categories";
import UserDetails from "../screens/UserDetails";
import UserDetailsDrawer from "../screens/UserDetailsDrawer";
import EventsList from "../screens/EventsList";
import EventDetails from "../screens/EventDetails";

const Authenticated = createDrawerNavigator(
  {
    Categories: createStackNavigator({ Categories }),
    UserDetails: createStackNavigator({ UserDetails }),
    Events: createStackNavigator({ EventsList }),
    EventDetails: createStackNavigator({ EventDetails })
  },
  {
    headerLayoutPreset: "left",
    contentComponent: UserDetailsDrawer
  }
);

export default Authenticated;