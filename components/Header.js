/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>EXCELENTE!</Text>
                <Text style={styles.subTitle}>Para aproveitar ao máximo, se conecte com seus amigos!</Text>
                <View style={styles.buttonHeader}>
                    <Button
                        title="Continuar"
                        color='#1449BF'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderWidth: 3,
        borderColor: '#1449BF',
        padding: 15,
        margin: 15
    },
    title: {
        borderLeftWidth: 2,
        borderLeftColor: '#E51C72',
        color: '#E51C72',
        fontWeight: '600',
        fontSize: 28,
        paddingLeft: 15,
        marginLeft: -17
    },
    subTitle: {
        fontSize: 18,
        color: '#1449BF',
        fontWeight: '600'
    },
    buttonHeader: {
        alignSelf: 'flex-end',
        width: 120,
        height: 25
    }
});