import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [priceAlertsEnabled, setPriceAlertsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "로그아웃",
        style: "destructive",
        onPress: () => console.log("로그아웃"),
      },
    ]);
  };

  const ProfileSection = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.section}>{children}</View>
  );

  const ProfileItem = ({
    icon,
    title,
    value,
    onPress,
    showArrow = true,
    rightComponent,
  }: {
    icon: string;
    title: string;
    value?: string;
    onPress?: () => void;
    showArrow?: boolean;
    rightComponent?: React.ReactNode;
  }) => (
    <TouchableOpacity
      style={styles.profileItem}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.profileItemLeft}>
        <Ionicons name={icon as any} size={24} color="#007AFF" />
        <Text style={styles.profileItemTitle}>{title}</Text>
      </View>
      <View style={styles.profileItemRight}>
        {value && <Text style={styles.profileItemValue}>{value}</Text>}
        {rightComponent}
        {showArrow && onPress && (
          <Ionicons name="chevron-forward" size={20} color="#6c757d" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>프로필</Text>
      </View>

      <ScrollView style={styles.content}>
        <ProfileSection>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={40} color="#fff" />
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>사용자</Text>
              <Text style={styles.userEmail}>user@example.com</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </ProfileSection>

        <ProfileSection>
          <Text style={styles.sectionTitle}>계정</Text>
          <ProfileItem
            icon="person-circle"
            title="개인정보 수정"
            onPress={() => console.log("개인정보 수정")}
          />
          <ProfileItem
            icon="key"
            title="비밀번호 변경"
            onPress={() => console.log("비밀번호 변경")}
          />
          <ProfileItem
            icon="card"
            title="결제 정보"
            onPress={() => console.log("결제 정보")}
          />
        </ProfileSection>

        <ProfileSection>
          <Text style={styles.sectionTitle}>설정</Text>
          <ProfileItem
            icon="notifications"
            title="알림"
            showArrow={false}
            rightComponent={
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#e9ecef", true: "#007AFF" }}
                thumbColor={"#fff"}
              />
            }
          />
          <ProfileItem
            icon="pricetag"
            title="가격 알림"
            showArrow={false}
            rightComponent={
              <Switch
                value={priceAlertsEnabled}
                onValueChange={setPriceAlertsEnabled}
                trackColor={{ false: "#e9ecef", true: "#007AFF" }}
                thumbColor={"#fff"}
              />
            }
          />
          <ProfileItem
            icon="location"
            title="위치 서비스"
            showArrow={false}
            rightComponent={
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
                trackColor={{ false: "#e9ecef", true: "#007AFF" }}
                thumbColor={"#fff"}
              />
            }
          />
          <ProfileItem
            icon="language"
            title="언어"
            value="한국어"
            onPress={() => console.log("언어 설정")}
          />
        </ProfileSection>

        <ProfileSection>
          <Text style={styles.sectionTitle}>앱 정보</Text>
          <ProfileItem
            icon="help-circle"
            title="도움말"
            onPress={() => console.log("도움말")}
          />
          <ProfileItem
            icon="document-text"
            title="이용약관"
            onPress={() => console.log("이용약관")}
          />
          <ProfileItem
            icon="shield-checkmark"
            title="개인정보처리방침"
            onPress={() => console.log("개인정보처리방침")}
          />
          <ProfileItem
            icon="information-circle"
            title="앱 버전"
            value="1.0.0"
            showArrow={false}
          />
        </ProfileSection>

        <ProfileSection>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>로그아웃</Text>
          </TouchableOpacity>
        </ProfileSection>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212529",
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
    padding: 16,
    paddingBottom: 8,
    backgroundColor: "#f8f9fa",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: "#6c757d",
  },
  editButton: {
    padding: 8,
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f8f9fa",
  },
  profileItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profileItemTitle: {
    fontSize: 16,
    color: "#212529",
    marginLeft: 12,
  },
  profileItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileItemValue: {
    fontSize: 16,
    color: "#6c757d",
    marginRight: 8,
  },
  logoutButton: {
    padding: 16,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "#ff4757",
    fontWeight: "500",
  },
});

export default ProfileScreen;
