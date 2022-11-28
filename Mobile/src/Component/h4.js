const { Text,StyleSheet, View } = require("react-native");


const H4 = (props) => {
    return (
        <Text style={styles.paragraph}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    paragraph: { 
        fontSize: 20,
    }, 
})

module.exports = H4;