import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Navigation from "./screens/Navigation";

const ViewAll = styled.View`
  padding-top: 10px;
`;

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar theme="auto" />
    </>
  );
}
