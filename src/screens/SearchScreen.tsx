import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "삼성 갤럭시",
    "아이폰 15",
    "노트북",
  ]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("검색:", searchQuery);
      // 여기에 실제 검색 로직 구현
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>상품 검색</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={20}
            color="#6c757d"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="상품명을 검색하세요"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#6c757d" />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.barcodeButton}>
          <Ionicons name="camera" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>최근 검색어</Text>
          <View style={styles.recentSearchContainer}>
            {recentSearches.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.recentSearchItem}
                onPress={() => setSearchQuery(item)}
              >
                <Text style={styles.recentSearchText}>{item}</Text>
                <Ionicons name="arrow-up-outline" size={16} color="#6c757d" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>인기 검색어</Text>
          <View style={styles.popularSearchContainer}>
            {["스마트폰", "노트북", "태블릿", "이어폰", "키보드"].map(
              (item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.popularSearchItem}
                  onPress={() => setSearchQuery(item)}
                >
                  <Text style={styles.popularSearchRank}>{index + 1}</Text>
                  <Text style={styles.popularSearchText}>{item}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>카테고리별 검색</Text>
          <View style={styles.categoryContainer}>
            {[
              { name: "전자제품", icon: "phone-portrait" },
              { name: "의류", icon: "shirt" },
              { name: "식품", icon: "restaurant" },
              { name: "화장품", icon: "color-palette" },
              { name: "서적", icon: "book" },
              { name: "스포츠", icon: "football" },
            ].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <Ionicons
                  name={category.icon as any}
                  size={24}
                  color="#007AFF"
                />
                <Text style={styles.categoryText}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
  searchContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#212529",
  },
  barcodeButton: {
    marginLeft: 12,
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212529",
    marginBottom: 12,
  },
  recentSearchContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  recentSearchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f8f9fa",
  },
  recentSearchText: {
    fontSize: 16,
    color: "#212529",
  },
  popularSearchContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  popularSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f8f9fa",
  },
  popularSearchRank: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    marginRight: 12,
    minWidth: 20,
  },
  popularSearchText: {
    fontSize: 16,
    color: "#212529",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    width: "48%",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: "#212529",
    textAlign: "center",
  },
});

export default SearchScreen;
