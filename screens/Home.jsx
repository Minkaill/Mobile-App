import { StatusBar } from "expo-status-bar";
import {
  Image,
  Alert,
  FlatList,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Post } from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const ViewAll = styled.View`
  padding-top: 10px;
`;

export const Home = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get("https://639499ac86829c49e8219fe5.mockapi.io/blogs")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(`Ошибка, не удалось получить статьи ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <ViewAll>
      <View>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
          }
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("FullPost", { id: item.id, title: item.title })}>
              <Post
                title={item.title}
                imageUrl={item.imageUrl}
                createdAt={item.createdAt}
              />
            </TouchableOpacity>
          )}
        />
        <StatusBar theme="fade" />
      </View>
    </ViewAll>
  );
}
