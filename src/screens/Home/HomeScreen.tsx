import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Body, Subtext, Caption } from "../../components/Typography";
import Colors from "../../constants/Colors";
import { homeStyles } from "./HomeStyles";

const categories = [
  { id: "all", label: "전체", selected: true },
  { id: "food", label: "식음료", selected: false },
  { id: "transport", label: "교통", selected: false },
  { id: "necessities", label: "생필품", selected: false },
  { id: "electronics", label: "전자제품", selected: false },
  { id: "cafe", label: "카페", selected: false },
  { id: "goods", label: "잡화", selected: false },
  { id: "clothing", label: "의류", selected: false },
  { id: "health", label: "헬스", selected: false },
  { id: "convenience", label: "편의", selected: false },
  { id: "others", label: "기타", selected: false },
];

const products = [
  {
    id: 1,
    name: "스마트 헤드폰",
    averagePrice: "100,000원",
    priceCount: 15,
    category: "전자제품",
    image: require("../../../assets/test.png"),
  },
  {
    id: 2,
    name: "스마트 헤드폰",
    averagePrice: "100,000원",
    priceCount: 15,
    category: "전자제품",
    image: require("../../../assets/test.png"),
  },
  {
    id: 3,
    name: "스마트 헤드폰",
    averagePrice: "100,000원",
    priceCount: 15,
    category: "전자제품",
    image: require("../../../assets/test.png"),
  },
  {
    id: 4,
    name: "스마트 헤드폰",
    averagePrice: "100,000원",
    priceCount: 15,
    category: "전자제품",
    image: require("../../../assets/test.png"),
  },
  {
    id: 5,
    name: "스마트 헤드폰",
    averagePrice: "100,000원",
    priceCount: 15,
    category: "전자제품",
    image: require("../../../assets/test.png"),
  },
  {
    id: 6,
    name: "스마트 헤드폰",
    averagePrice: "100,000원",
    priceCount: 15,
    category: "전자제품",
    image: require("../../../assets/test.png"),
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchPress = () => {
    console.log("검색 버튼 클릭");
  };

  const handleFilterPress = () => {
    console.log("필터 버튼 클릭");
  };

  const handleSortPress = () => {
    console.log("정렬 버튼 클릭");
  };

  const renderCategoryItem = (category: (typeof categories)[0]) => {
    const isSelected = selectedCategory === category.id;
    return (
      <TouchableOpacity
        key={category.id}
        style={[
          homeStyles.categoryItem,
          isSelected
            ? homeStyles.categoryItemSelected
            : homeStyles.categoryItemUnselected,
        ]}
        onPress={() => handleCategoryPress(category.id)}
      >
        <Text
          style={[
            homeStyles.categoryText,
            isSelected
              ? homeStyles.categoryTextSelected
              : homeStyles.categoryTextUnselected,
          ]}
        >
          {category.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderProductItem = (product: (typeof products)[0]) => (
    <TouchableOpacity key={product.id} style={homeStyles.productItem}>
      <Image
        style={homeStyles.productImage}
        source={product.image}
        resizeMode="cover"
      />
      <View style={homeStyles.productInfo}>
        <Text style={homeStyles.productName}>{product.name}</Text>
        <Text style={homeStyles.productPrice}>
          평균 가격: {product.averagePrice} (가격 정보 {product.priceCount}건)
        </Text>
        <Text style={homeStyles.productCategory}>{product.category}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={homeStyles.home}>
      <View style={homeStyles.view}>
        {/* 헤더 */}
        <Header />

        {/* 검색 바 */}
        <View style={homeStyles.searchWrapper}>
          <View style={homeStyles.search}>
            <View style={homeStyles.frame}>
              <Text style={homeStyles.searchIcon}>􀊫</Text>
              <Text style={homeStyles.searchText}>상품검색</Text>
            </View>
            <TouchableOpacity onPress={handleFilterPress}>
              <Text style={homeStyles.filterIcon}>􀊱</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 카테고리 필터 */}
        <View style={homeStyles.categoryWrapper}>
          {categories.map(renderCategoryItem)}
        </View>

        {/* 정렬 옵션 */}
        <View style={homeStyles.sortWrapper}>
          <TouchableOpacity
            style={homeStyles.sortContainer}
            onPress={handleSortPress}
          >
            <Text style={homeStyles.sortText}>인기순</Text>
            <Image
              style={homeStyles.sortIcon}
              source={require("../../../assets/test.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* 상품 리스트 */}
        <ScrollView
          style={homeStyles.productListWrapper}
          contentContainerStyle={homeStyles.productListContent}
          showsVerticalScrollIndicator={false}
        >
          {products.map(renderProductItem)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
