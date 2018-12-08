import React from "react";
import planets from '../../data/planets';
import { Actions } from 'react-native-router-flux';

import {
  View,
  StyleSheet
} from 'react-native'

import {
  List,
  ListItem
} from 'react-native-elements'
import PlanetDetails from "./PlanetDetails";
import NavBar from './Navbar/NavBar'

export default class PlanetList extends React.Component {


  render() {


    return (
      <View>

        <List containerStyle={{ marginBottom: 20 }}>
          {
            planets.map((planet) => (
              <ListItem
                onPress={() => Actions.planetdetails({ planet: planet })}
                roundAvatar
                avatar={planet.icon}
                key={planet.name}
                title={planet.name}
              />
            ))
          }
        </List>
        <View style={styles.container}>
          <NavBar />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 320
  },
});

// component

// const handlePress = () => {    
//   const nextPage = currentPage === 'PlanetList' 
//     ? 'PlanetList' 
//     : 'PlanetDetails';

//   setConstellation(constellation);
//   changePage(nextPage);
// };

// <TouchableHighlight 
//         style={styles.button}
//         onPress={handlePress} 
//         activeOpacity={0.3} 
//         underlayColor={colors.$darkPurple}>
//         <Image 
//           style={styles.icon}
//           source={require('../assets/icons/eye.png')}/>
// </TouchableHighlight>


// actions

// export const changePage = page => ({
//   type: 'CHANGE_PAGE',
//   page
// });

// export const setConstellation = constellation => ({
//   type: 'SET_CONSTELLATION',
//   constellation
// });

// reducers

// export const pageReducer = (state = 'Welcome', action) => {
//   switch(action.type) {
//   case 'CHANGE_PAGE':
//     return action.page;
//   default: 
//     return state;
//   }
// };

// export const constellationReducer = (state = null, action) => {
//   switch(action.type) {
//   case 'SET_CONSTELLATION':
//     return action.constellation;
//   default:
//     return state;
//   }
// };