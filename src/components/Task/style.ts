import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    backgroundColor: "#262626",
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 15,
    paddingRight: 15,
  },
  task: {
    color: "#F2F2F2",
    fontSize: 14,
},
textConcluded: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontSize: 14
  },
  notConcluded: {
    width: 17,
    height: 17,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#4EA8DE'
  },
  concluded: {
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: '#8284FA'
  }
});
