const { View, Image,StyleSheet } = require('react-native');

const Logo = (props) => {
    return (
        <View style={styles.logo}>
            <Image 
                source={require('../assets/fav.png')}
                style={{width:80}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        justifyContent:'center',
        alignItems:'center'
    },
})

module.exports = Logo;