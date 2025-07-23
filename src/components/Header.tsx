import * as React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../assets/Logo.svg";
import SettingIcon from "../../assets/settingIcon.svg";
import Flag from "../../assets/flag.svg";
import { Caption } from "./Typography";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={[styles.view, styles.viewFlexBox]}>
        <Logo style={styles.logoIcon} width={20} height={32} />
        <View style={[styles.frameParent, styles.viewFlexBox]}>
          <View style={styles.frameChild}>
            <View style={styles.flagContainer}>
              <Flag style={styles.flagIcon} width={16} height={12} />
              <Caption style={styles.locationText} weight="regular">
                대한민국 서울
              </Caption>
            </View>
          </View>
          <TouchableOpacity>
            <SettingIcon style={styles.settingIcon} width={15} height={15} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
  },
  viewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  logoIcon: {
    width: 20,
    height: 32,
  },
  frameChild: {
    height: 19,
    minWidth: 80,
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    height: 19,
  },
  flagIcon: {
    width: 16,
    height: 12,
  },
  locationText: {
    fontSize: 12,
    color: "#666666",
  },
  settingIcon: {
    width: 15,
    height: 15,
  },
  frameParent: {
    justifyContent: "flex-end",
    gap: 15,
  },
  view: {
    width: "100%",
    justifyContent: "space-between",
    gap: 0,
  },
});

export default Header;
