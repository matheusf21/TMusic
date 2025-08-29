import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>

      <View style = {[styles.imageWrapper, styles.elevation]}>
        <Image
        source={require('.assets/img/gallo.png')}
        style={styles.musicImage}
        />
      </View>

      <View> 
        <Text style={[styles.songContent, styles.songTitle]}>
          Nome da Musica
        </Text>
        <Text style={[styles.songContent, styles.songTitle]}>
          Autor da Musica
        </Text>
      </View>

      <View>
        <Slider
        style={styles.progressBar}
        value={10}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor='#FFD369'
        minimumTrackTintColor='#FFD369'
        maximumTrackTintColor='fff'
        onSlidingComplete={() => {}}
        />
        <View style={styles.progressLevelDuration}>
          <Text style={styles.progressLabelText}>00:00</Text>
          <Text style={styles.progressLabelText}>00:00</Text>
        </View>
      </View>

      </View>
      <View style={styles.footer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <Ionicons name='heart-outline' size={30} color="#88888"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='repeat' size={30} color="#88888"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='share-outline' size={30} color="#88888"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='ellipsis-horizontal' size={30} color="#88888"/>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    width: width,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: width,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 40,
    borderTopColor: '#39E45',
    borderTopWidth: 1,
  },
  iconWrapper: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between'
  },
  imageWrapper: {
    width: 340,
    height: 360,
    marginVertical: 20,
  },

  musicImage: {
    width: '100%',
    height: '100¨%',
    borderRadius: 15,
  },

  elevation: {
    elevation: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',

  },

  songTitle: {
    fontSize: 18,
    fontWeight: '600',

  },

  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  } 
});
