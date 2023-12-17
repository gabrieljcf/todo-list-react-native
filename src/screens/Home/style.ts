import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#0D0D0D",
    padding: 24
  },
  logo: {
    marginTop: 40,
    marginBottom: 40,
    alignSelf: "center",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    zIndex: 100,
    marginTop: -30
  },
  input: {
    height: 54,
    backgroundColor: "#262626",
    padding: 16,
    fontSize: 16,
    color: "#F2F2F2",
    flex: 1,
    marginRight: 4,
    borderRadius: 6,
  },
  button: {
    height: 54,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#FFF',
    marginBottom: 20
  },
  listContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24
  }
});
