import React from "react";
import { Text, TextStyle } from "react-native";
import Colors from "../constants/Colors";

// Typography variant types
type TypographyVariant =
  | "headingXL"
  | "headingL"
  | "headingM"
  | "body"
  | "subtext"
  | "caption"
  | "mini";

// Font weight types
type FontWeight = "thin" | "light" | "regular" | "medium" | "semibold" | "bold";

interface TypographyProps {
  variant: TypographyVariant;
  weight?: FontWeight;
  color?: string;
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
  onPress?: () => void;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  weight = "regular",
  color = Colors.text.primary,
  children,
  style,
  numberOfLines,
  onPress,
}) => {
  const getVariantStyle = (variant: TypographyVariant): TextStyle => {
    switch (variant) {
      case "headingXL":
        return {
          fontSize: 30,
          lineHeight: 26,
          letterSpacing: -1,
        };
      case "headingL":
        return {
          fontSize: 24,
          lineHeight: 32,
          letterSpacing: -1,
        };
      case "headingM":
        return {
          fontSize: 20,
          lineHeight: 28,
          letterSpacing: -0.25,
        };
      case "body":
        return {
          fontSize: 16,
          lineHeight: 24,
        };
      case "subtext":
        return {
          fontSize: 14,
          lineHeight: 20,
          letterSpacing: 0.2,
        };
      case "caption":
        return {
          fontSize: 12,
          lineHeight: 12,
        };
      case "mini":
        return {
          fontSize: 10,
          lineHeight: 10,
        };
      default:
        return {};
    }
  };

  const getFontWeight = (weight: FontWeight): TextStyle => {
    switch (weight) {
      case "thin":
        return { fontWeight: "100" };
      case "light":
        return { fontWeight: "300" };
      case "regular":
        return { fontWeight: "400" };
      case "medium":
        return { fontWeight: "500" };
      case "semibold":
        return { fontWeight: "600" };
      case "bold":
        return { fontWeight: "700" };
      default:
        return { fontWeight: "400" };
    }
  };

  const textStyle: TextStyle = {
    ...getVariantStyle(variant),
    ...getFontWeight(weight),
    fontFamily: "Pretendard",
    color,
    textAlign: "left",
    ...style,
  };

  return (
    <Text style={textStyle} numberOfLines={numberOfLines} onPress={onPress}>
      {children}
    </Text>
  );
};

// 미리 정의된 스타일 컴포넌트들
export const HeadingXL: React.FC<Omit<TypographyProps, "variant">> = (
  props
) => <Typography variant="headingXL" {...props} />;

export const HeadingL: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="headingL" {...props} />
);

export const HeadingM: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="headingM" {...props} />
);

export const Body: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="body" {...props} />
);

export const Subtext: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="subtext" {...props} />
);

export const Caption: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="caption" {...props} />
);

export const Mini: React.FC<Omit<TypographyProps, "variant">> = (props) => (
  <Typography variant="mini" {...props} />
);

export default Typography;
