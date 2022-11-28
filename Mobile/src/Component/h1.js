const { Text,StyleSheet, View } = require("react-native");


const H1 = (props) => {
    return (
        <View>
            <Text style={styles.paragraph}>{props.text}</Text>
            <Text style={[styles.paragraph, styles.abs, {textShadowOffset: {width: -1, height: -1}}]}>{props.text}</Text> 
            <Text style={[styles.paragraph, styles.abs, {textShadowOffset: {width: -1, height: 1}}]}>{props.text}</Text>
            <Text style={[styles.paragraph, styles.abs, {textShadowOffset: {width: 1, height: -1}}]}>{props.text}</Text> 
        </View>
       
    );
}

const styles = StyleSheet.create({
    paragraph: { 
        fontSize: 40,
        color: '#cc6b49', 
        fontWeight:'bold',
        textShadowColor: '#8bc7b6', 
        textShadowRadius: 1, 
        textShadowOffset: { 
            width: -3,
            height: 2
        }
    }, 
    abs: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0
    },
})

module.exports = H1;