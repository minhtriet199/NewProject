const { Text,StyleSheet, View } = require("react-native");


const H3 = (props) => {
    return (
            <Text style={styles.paragraph}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    paragraph: { 
        fontSize: 25,
        fontWeight:'bold',
    }, 
})

module.exports = H3;