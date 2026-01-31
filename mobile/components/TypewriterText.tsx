import { useState, useEffect } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  style?: StyleProp<TextStyle>;
  onDoneTyping?: () => void;
};

const TypewriterText = ({
  text,
  speed = 75,
  style,
  onDoneTyping = () => {},
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingSpeed, _] = useState(speed);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        onDoneTyping();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <Text style={[styles.defaultStyle, style]}>{displayedText}</Text>;
};

const styles = StyleSheet.create({
  defaultStyle: {},
});

export default TypewriterText;
