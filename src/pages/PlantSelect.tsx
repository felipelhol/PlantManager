import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  } from 'react-native';

import {Header} from '../components/Header';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';

interface EnvironmentProps {
  key: string;
  title: string;
}
interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export function PlantSelect(){
  // hook usado antes da tela ser carregada fetch = buscar
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  //estado auxiliar para filtro pra nao fazer req toda hora pra API
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleEnvironmentSelected(environment: string){
    setEnvironmentSelected(environment);

    //verificação se o amb selecionado é todos
    if(environment == 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
        plant.environments.includes(environment)
      );

      setFilteredPlants(filtered);
  }

  async function fetchPlants(){
    const { data } = await api.get(`plants?_sort=title&_order=asc&_page=${page}&_limit=8`);

    if(!data)
      return setLoading(true);
    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    }else{
      setPlants(data);
      setFilteredPlants(data);
      
    }
    
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if( distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  useEffect(() => {
    async function fetchEnvironment(){
      const { data } = await api
      .get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ]);
    }

    fetchEnvironment();

  },[])

  useEffect(() => {
   

    fetchPlants();

  },[])

  if(loading)
  return <Load />
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

          <Text style={styles.title}>
            Em qual ambiente
          </Text>
          <Text style={styles.subtitle}>
            você quer colocar sua planta?
          </Text>
      </View>

      <View>
        <FlatList
          data={environments}
          renderItem ={({ item }) => (
            <EnviromentButton 
              title={item.title} 
              active={item.key ===environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
              //active
            />  //função anonima vai rederizar o botao de uma flatlist de 5 elementos
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList} //estiliza lista por aqui
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({item})=>(
            <PlantCardPrimary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd}) => handleFetchMore(distanceFromEnd)
        }
          ListEmptyComponent={
            loadingMore
            ? <ActivityIndicator color={colors.green} />
            : <> </>
          }
        />
      </View>
     

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:'center',
    //alignItems: 'center',
    backgroundColor: colors.background
  },
  header:{
    paddingHorizontal:30
  },
  title: {
    fontSize:17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight:20,
    marginTop: 15,
  },
  subtitle: {
    fontSize:17,
    fontFamily: fonts.text,
    lineHeight:20,
    color: colors.heading,

  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex:1,
    paddingHorizontal:32,
    justifyContent:'center',
  },
  
});