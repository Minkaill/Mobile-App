import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import axios from "axios";
import Loading from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 16px;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  margin: 0 auto 20px;
`;

const PostText = styled.Text`
  width: 100%
  text-align: left
  font-size: 18px;
  line-height: 23px;
`;

const ViewAll = styled.View`
  padding-top: 10px;
  width: 95%
  margin: 0px auto
`;

const FullPost = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {id, title} = route.params

  useEffect(() => {
    navigation.setOptions({
        title
    })
    setIsLoading(true);
    axios
      .get(`https://639499ac86829c49e8219fe5.mockapi.io/blogs/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(`Ошибка, не удалось получить статью ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <ViewAll>
      <View>
        <PostImage source={{ uri: data.imageUrl }} />
        <PostText>{data.text}</PostText>
      </View>
    </ViewAll>
  );
};

export default FullPost;
