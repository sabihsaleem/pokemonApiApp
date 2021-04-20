import React, { PureComponent } from 'react'; 
//import UI from react-native
import { View, Text, Image } from 'react-native';
//import styles for component.
import styles from './styles';


//Define your class component
export default class Pokemon extends PureComponent {
    c
    render() {
        //Destruct your navigation props (NOT SETUP YET!)
        const { navigation } = this.props;
        return (
            <View>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                        style={styles.pokemonImage} />
            {/*Use navigation.getParam to get the params of navigation prefered since you can set a default value
            therefore not returning undefined and not crashing your app. */}
                <Text style={styles.nameOfPokemon}>{navigation.getParam('name', 'Name of Pokemon')}</Text>
            </View>
        );
    }
}