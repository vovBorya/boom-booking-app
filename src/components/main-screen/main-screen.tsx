import React from "react";
import {Text, View, ScrollView} from "react-native";
import styles from "./main-screen-styles";
import EventView from "../small-components/event-view";
import RestaurantView from "../small-components/restaurant-view";
import { RESTAURANTS_AND_EVENTS } from "../../constants/queries/restaurants-and-events";
import {useQuery} from "@apollo/react-hooks";
import Spinner from "../small-components/loader";
import ItemList from "../small-components/item-list";
import MainHeader from "../small-components/main-header";

type MainScreenStateType = {
  loading: boolean
  error: any
  data: any
}

export default class MainScreen extends React.Component<any, MainScreenStateType> {

  /*const { loading, error, data } = useQuery(RESTAURANTS_AND_EVENTS, {
    variables: {"restaurantSearchOptions": {},
                "eventSearchOptions": {} }
  });*/

  state = {
    loading: true,
    error: null,
    data: null
  }

  componentDidMount() {
    /*this.setState((state) => {
      const { loading, error, data } = useQuery(RESTAURANTS_AND_EVENTS, {
        variables: {"restaurantSearchOptions": {},
          "eventSearchOptions": {} }
      });

      return {
        loading,
        error,
        data
      }
    })*/
  }

  onEventClick = () => {
    console.log('onEventClick');
  }

  onHeartClick = () => {
    console.log('onHeartClick');
  }

  onRestaurantClick = () => {
    console.log('onRestaurantClick');
  }

  /*if (loading) return <Spinner/>;*/

  render() {

    const { loading, error, data } = this.state;

    const eventContent = (!loading && data)
      ?
      <ScrollView horizontal={true}>
        <ItemList
          style={styles.eventView}
          data={data.events}
          renderItem={item =>
            <EventView
              key={item.id}
              eventName={item.name}
              restaurantName={item.restaurant.name}
              onEventClick={this.onEventClick}
            />}
          horizontal={true}
        />
      </ScrollView>
      : <Spinner />;

    const restaurantContent = (!loading && data)
      ?
      <ScrollView>
        <ItemList
          style={styles.restaurantView}
          data={data.restaurants}
          renderItem={item =>
            <RestaurantView
              key={item.id}
              restaurantInfo={item}
              onRestaurantClick={this.onRestaurantClick}
            />}
        />
      </ScrollView>
      : <Spinner />

    return(
      <View style={styles.scrollContainer}>
        <MainHeader />
        <ScrollView>
          <View style={styles.viewContainer}>

            <Text style={styles.viewTitle} >События</Text>
            {eventContent}

            <Text style={styles.viewTitle}>Заведения</Text>
            {restaurantContent}

          </View>
        </ScrollView>
      </View>
    );
  }
};
