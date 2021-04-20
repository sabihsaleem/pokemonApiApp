import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './style'

const PokeCard = ({name}) => {
    return (
        <TouchableOpacity style = {{backgroundColor: 'transparent'}}>
            <View style = {styles.listItemContainer}>
                <Text style = {styles.pokeItemHeader}></Text>
                <Image 
                    source = {{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                    style = {styles.pokeImage}
                />
            </View>
        </TouchableOpacity>
    )
}

export default PokeCard