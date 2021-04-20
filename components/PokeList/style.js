import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {
        color: '#fff',
        fontSize: 24
    },
    pokeImage: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50
    }
})

export default styles;