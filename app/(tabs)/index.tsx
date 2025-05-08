import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello.</Text>
      <TouchableOpacity onPress={()=>alert("You Clicked me")}>
        <Text>Press ME</Text>
      </TouchableOpacity>
      {/* <Image source={require("../assets/images/icon.png")} style={{ width: 100, height: 100 }} /> */}
      <Link href={"/notifications"}><Text>Visit Notification Screens</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'red',
  }
});
