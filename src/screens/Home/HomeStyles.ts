import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const homeStyles = StyleSheet.create({
  home: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  view: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
    flex: 1,
  },
  
  // Search Section
  searchWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  search: {
    borderRadius: 100,
    padding: 11,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Colors.border.light,
    backgroundColor: Colors.white,
    alignItems: 'center',
    width: '100%',
  },
  frame: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    fontSize: 17,
    letterSpacing: -0.08,
    lineHeight: 22,
    color: Colors.text.tertiary,
  },
  searchText: {
    lineHeight: 24,
    fontSize: 16,
    color: Colors.text.tertiary,
    fontFamily: 'Pretendard',
  },
  filterIcon: {
    fontSize: 17,
    letterSpacing: -0.08,
    lineHeight: 22,
    color: Colors.text.tertiary,
  },
  
  // Category Section
  categoryWrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexWrap: 'wrap',
    alignContent: 'center',
    gap: 5,
  },
  categoryItem: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Colors.border.light,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoryItemSelected: {
    backgroundColor: Colors.primary,
  },
  categoryItemUnselected: {
    backgroundColor: Colors.white,
  },
  categoryText: {
    lineHeight: 19,
    letterSpacing: 0.19,
    fontSize: 13,
    fontFamily: 'Pretendard',
  },
  categoryTextSelected: {
    color: Colors.white,
  },
  categoryTextUnselected: {
    color: Colors.category.unselected,
  },
  
  // Sort Section
  sortWrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 1,
    justifyContent: 'flex-end',
  },
  sortContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortText: {
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.2,
    fontSize: 14,
    color: Colors.text.primary,
    fontFamily: 'Pretendard',
  },
  sortIcon: {
    width: 10,
    height: 6,
  },
  
  // Product List Section
  productListWrapper: {
    flex: 1,
    paddingBottom: 100, // 네비게이션 바 공간 확보
  },
  productListContent: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  productItem: {
    gap: 16,
    height: 94,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  productImage: {
    borderRadius: 8,
    width: 70,
    height: 70,
    overflow: 'hidden',
  },
  productInfo: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    gap: 4,
  },
  productName: {
    fontWeight: '600',
    lineHeight: 24,
    fontSize: 16,
    color: Colors.text.primary,
    fontFamily: 'Pretendard',
  },
  productPrice: {
    color: Colors.text.secondary,
    fontFamily: 'Pretendard',
    lineHeight: 20,
    letterSpacing: 0.2,
    fontSize: 14,
  },
  productCategory: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '300',
    color: Colors.text.tertiary,
    fontFamily: 'Pretendard',
  },
});
