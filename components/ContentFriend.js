/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button, Image, FlatList } from 'react-native'
import feed from '../utils/json/feed.json'

export default class ContentFriend extends Component {

    state = {
        data: [],
        follow: []
    }

    async componentDidMount() {
        await setTimeout(() => {
            return (
                this.setState({
                    data: feed
                })
            )
        }, 1500)
    }

    follow = (index) => {
        let follow = this.state.follow
        if (!this.state.follow.includes(index)) {
            follow.push(index)
            this.setState({
                data: [...this.state.data],
                follow: follow
            })
        } else {
            let f = follow.indexOf(index)
            follow.splice(f, 1);
            this.setState({
                data: [...this.state.data],
                follow: follow
            })
        }
    }

    render() {
        return (
            <View style={styles.friends}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.name}
                    renderItem={({ item, index }) =>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: 100,
                            padding: 15,
                            backgroundColor: index % 2 === 1 ? '#fff' : '#fff10'
                        }}
                        >
                            <View style={styles.namePhotoContent}>
                                <Image source={{ uri: item.image }} style={styles.photo} />
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View style={styles.buttonFollow}>
                                <Button
                                    onPress={() => this.follow(index)}
                                    title={this.state.follow.includes(index) ? 'Seguindo' : 'Seguir'}
                                    color={this.state.follow.includes(index) ? '#E51C72' : '#1449BF'}
                                />
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    friends: {
        backgroundColor: '#F5F5F5',
        flex: 6,
        marginTop: 5,
        alignSelf: 'stretch',
    },
    namePhotoContent: {
        height: 200,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    photo: {
        width: 80,
        height: 80
    },
    name: {
        fontSize: 18,
        fontWeight: '600'
    },
    buttonFollow: {
        width: 100,
        height: 40
    }
});
