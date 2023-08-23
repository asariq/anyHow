import { Dimensions } from "react-native";

export const {height:windowHeight,width:windowWidth}=Dimensions.get("window")

export const regx=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/