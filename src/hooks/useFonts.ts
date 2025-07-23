import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // 폰트 파일이 있다면 로드하고, 없다면 시스템 폰트 사용
        // 실제 프리텐다드 폰트 파일이 있을 때 아래 주석을 해제하고 사용
        /*
        await Font.loadAsync({
          'Pretendard-Thin': require('../../assets/fonts/Pretendard-Thin.otf'),
          'Pretendard-Light': require('../../assets/fonts/Pretendard-Light.otf'),
          'Pretendard-Regular': require('../../assets/fonts/Pretendard-Regular.otf'),
          'Pretendard-Medium': require('../../assets/fonts/Pretendard-Medium.otf'),
          'Pretendard-SemiBold': require('../../assets/fonts/Pretendard-SemiBold.otf'),
          'Pretendard-Bold': require('../../assets/fonts/Pretendard-Bold.otf'),
        });
        */
        
        // 현재는 시스템 폰트로 대체
        setFontsLoaded(true);
      } catch (error) {
        console.warn('폰트 로딩 실패:', error);
        setFontsLoaded(true); // 에러가 발생해도 앱이 실행되도록
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};
