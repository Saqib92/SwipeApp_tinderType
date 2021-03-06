import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Card, Button, Header } from 'react-native-elements';
import Deck from '../Components/Deck';



console.disableYellowBox = true



const MainScreen = () => {

    const DATA = [
        { id: 1, text: 'John King', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
        { id: 2, text: 'Mark', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
        { id: 3, text: 'Ani', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
        { id: 4, text: 'Kishore', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
        { id: 5, text: 'Hammad', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
        { id: 6, text: 'Shami', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
        { id: 7, text: 'Gamer Boy', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
        { id: 8, text: 'Richard', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
      ];
   
      const [modelProfile, setModelProfile] = useState(false);
 
  function renderNoMoreCards () {
        return(
          <Card title="All Done!">
            <Text style={{ marginBottom: 10}}>
              There are no more cards
            </Text>
            <Button
              backgroundColor="red"
              title="Get more"
            />
            </Card>
        );
      }

   

  function renderCard(item) {
       
        return (
        
          <Card
            key={item.id}
            title={item.text}
            image={{ uri: item.uri }}>
    
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              onPress={() => setModelProfile(true)}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'red' }}
              title='View Profile'
            >
            </Button>
          </Card>
        );
      
    }





    return (

        <View style={styles.container}>
          <View style={{ marginTop: 20, alignItems: 'center'}}>
            <View style={{ marginHorizontal: '4%'}}>
              <Text style={{ fontSize: 30}}>
                  Swipe left to say no, swipe right to say yes
              </Text>
            </View>
          </View>
          <Deck
            data={DATA}
            renderCard={renderCard}
            renderNoMoreCards={renderNoMoreCards}
            
          />
        </View>
      );
    }

  
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  }
  );
  
export default MainScreen;

