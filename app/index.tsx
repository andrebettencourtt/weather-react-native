import { ScrollView } from "react-native";

import Card from "../components/card";
import WeatherDetail from "../components/weatherDetail";
import NextDays from "../components/next-days";

export default function Index() {
  return (
    <ScrollView
      style={{ backgroundColor: "#13131A" }}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card />
      <WeatherDetail />
      <NextDays />
    </ScrollView>
  );
}
