import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class HeaderComponent extends Component {

    render() {
        const { title, subTitle } = this.props
        return (
            <View >
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <Image source={require('./images/backIcon.png')}
                            style={styles.backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./images/hamburgerIcon.png')}
                            style={styles.hamburgerIcon} />
                    </TouchableOpacity>
                    </View>
                <View>
                    <Text style={styles.header}>{title}</Text>
                    <Text style={styles.subHeader}>{subTitle}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#394e59',
        marginLeft: 10,
        paddingVertical: 10
    },
    backIcon: {
        height: 25,
        width: 20,
        marginTop: 10

    },
    hamburgerIcon: {
        width: 40,
        height: 40,
        position: 'absolute',
        left: 300
    },
    subHeader: {
        fontSize: 13,
        marginLeft: 10,

    }
})
export default HeaderComponent;