import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

const MoviesFnComp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const jsonResponse = await response.json();
      setData(jsonResponse.movies);
      console.log(jsonResponse.movies);
    } catch (error) {
      console.error('error is' + {error});
    } finally {
      console.log('data is ' + {data});
    }
  };

  const getMoviesFromApi = () => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        setData(json.movies);
        console.log('getMoviesFromApi');
        console.log({data});
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMoviesFromApi();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Test Text {data.length}</Text>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default MoviesFnComp;
