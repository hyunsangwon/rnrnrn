import { StyleSheet, View, Text, Image, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';

const Travler = ({ navigation }) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          RobotoBold: require('../fonts/Roboto-Bold.ttf'),
          RobotoRegular: require('../fonts/Roboto-Regular.ttf'),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={[styles.loadingBox, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ImageBackground source={require('../images/back.png')} style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} />
        <Icon name="account-circle" size={33} color="#a2a2db" style={{ marginLeft: 230 }} />
      </View>
      <View style={styles.body} onLayout={onLayoutRootView}>
        <Text style={styles.title}>상원여행</Text>
        <Text style={styles.intro}>안녕하세요, 여행추천앱 입니다.</Text>
        <View style={styles.searchBox}>
          <Image source={require('../images/search.png')} style={{ height: 21, width: 17 }} />
          <TextInput placeholder="Lorem ipsum" style={styles.searchInput} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {/* Button 컴포넌트를 사용하지 않고 TouchableOpacity를 사용하는 이유.
              Button 컴포넌트는 안드로이드와 ios에서 다르게 보이기 때문 
              */}
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.itemBase, styles.airplaneBg]}>
            <Image source={require('../images/p.png')} style={{ height: 24, width: 24 }} />
          </TouchableOpacity>

          <View style={[styles.itemBase, styles.buildingBg]}>
            <Icon name="office-building" color="white" size={32} />
          </View>

          <View style={[styles.itemBase, styles.busBg]}>
            <Icon name="bus" color="white" size={32} />
          </View>

          <View style={[styles.itemBase, styles.dotBg]}>
            <Icon name="dots-horizontal" color="white" size={32} />
          </View>
        </ScrollView>
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'RobotoRegular',
            marginTop: 50,
            fontSize: 22,
          }}
        >
          Recommended
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          <View style={styles.recommendedBox}>
            <Image source={require('../images/1.jpg')} style={styles.recommendedImg} />
            <View style={styles.recommendedTextBox}>
              <Text style={styles.recommendedText}>Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
            </View>
          </View>
          <View style={styles.recommendedBox}>
            <Image source={require('../images/2.jpg')} style={styles.recommendedImg} />
            <View style={styles.recommendedTextBox}>
              <Text style={styles.recommendedText}>Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
            </View>
          </View>
          <View style={styles.recommendedBox}>
            <Image source={require('../images/3.jpg')} style={styles.recommendedImg} />
            <View style={styles.recommendedTextBox}>
              <Text style={styles.recommendedText}>Lorem impsum dolor sit amet, consectetuer adipscing elit,</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Travler;

const styles = StyleSheet.create({
  loadingBox: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  container: { width: '100%', height: '100%' },
  header: { flexDirection: 'row', marginTop: 40, alignItems: 'center', paddingHorizontal: 40 },
  body: { paddingHorizontal: 40, marginTop: 25 },
  title: { fontSize: 40, color: '#522289' },
  intro: { fontSize: 15, paddingVertical: 10, paddingRight: 80, lineHeight: 22, color: '#a2a2db' },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 40,
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  searchInput: {
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#ccccef',
  },
  scroll: {
    marginRight: -40,
    marginTop: 35,
  },
  itemBase: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 66,
    width: 66,
    borderRadius: 50,
  },
  airplaneBg: { backgroundColor: '#5facdb' },
  buildingBg: { backgroundColor: '#ff5c83', marginHorizontal: 15 },
  busBg: { backgroundColor: '#ffa06c' },
  dotBg: { backgroundColor: '#bb32fe', marginHorizontal: 15 },
  recommendedBox: {
    backgroundColor: '#FEFEFE',
    height: 200,
    width: 190,
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 5,
  },
  recommendedImg: {
    width: 180,
    borderRadius: 10,
    height: 130,
  },
  recommendedTextBox: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  recommendedText: {
    fontFamily: 'RobotoRegular',
    fontSize: 12,
    color: '#a2a2db',
  },
});
