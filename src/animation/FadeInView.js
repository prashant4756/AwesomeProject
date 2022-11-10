import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const FadeInView = props => {
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.back(),
    }).start();
  }, [fadeInAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeInAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};
export default FadeInView;
