import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {

    const navigation = useNavigation();



    return (
        <SafeAreaView className='flex-1 pt-12 bg-color-blanco'>

            <View className="flex-row justify-around items-center py-4 bg-neutral-100">
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View className="flex items-center">
                        <Ionicons name="home-outline" size={20} color="#FFA500" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <View className="flex items-center">
                    <Feather name="search" size={20} color="#7d7d7d" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                    <View className="flex items-center">
                        <EvilIcons name="heart" size={24} color="#7d7d7d" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                    <View className="flex items-center">
                        <MaterialIcons name="history" size={24} color="#7d7d7ds" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}