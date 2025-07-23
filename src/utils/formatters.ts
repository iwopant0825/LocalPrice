/**
 * 가격을 한국 원화 형식으로 포맷팅
 * @param price 가격 (숫자)
 * @returns 포맷된 가격 문자열
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString('ko-KR') + '원';
};

/**
 * 거리를 사용자 친화적인 형식으로 포맷팅
 * @param distance 거리 (미터)
 * @returns 포맷된 거리 문자열
 */
export const formatDistance = (distance: number): string => {
  if (distance < 1000) {
    return `${Math.round(distance)}m`;
  } else {
    return `${(distance / 1000).toFixed(1)}km`;
  }
};

/**
 * 날짜를 상대적인 시간으로 포맷팅
 * @param date 날짜
 * @returns 상대적 시간 문자열 (예: "2시간 전", "3일 전")
 */
export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else {
    return `${days}일 전`;
  }
};

/**
 * 카테고리명을 한국어로 변환
 * @param category 영문 카테고리명
 * @returns 한국어 카테고리명
 */
export const getCategoryDisplayName = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    electronics: '전자제품',
    clothing: '의류',
    food: '식품',
    cosmetics: '화장품',
    books: '서적',
    sports: '스포츠',
    home: '생활용품',
    toys: '완구/취미',
  };
  
  return categoryMap[category] || category;
};

/**
 * 전화번호를 포맷팅
 * @param phoneNumber 전화번호
 * @returns 포맷된 전화번호
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const numbers = phoneNumber.replace(/\D/g, '');
  
  if (numbers.length === 11) {
    return numbers.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  } else if (numbers.length === 10) {
    return numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  }
  
  return phoneNumber;
};

/**
 * 문자열을 단축
 * @param text 원본 텍스트
 * @param maxLength 최대 길이
 * @returns 단축된 텍스트
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};
