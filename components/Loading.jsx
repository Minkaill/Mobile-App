import React from "react";
import styled from "styled-components/native";
import { View, Text, ActivityIndicator } from 'react-native';

const ViewAll = styled.View`
  padding-top: 35px;
  width: 95%
  margin: auto
`;

const Loading = () => {
  return (
    <ViewAll
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    </ViewAll>
  );
};

export default Loading;
