import React, { useEffect, useRef } from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);




const Donut = ({ percentage, textColor }) => {


  const radius = 40;
  const strokeWidth = 10
  const duration = 500
  const color = "#01151A"
  const delay = 0
  const max = 1000
  const donutTitleTextColor = '#4C5466';

  const animated = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : percentage);
    })
  };

  useEffect(() => {
    animation(percentage);
    animated.addListener((v) => {
      const maxPerc = 100 * v.value / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    }, [max, percentage]);

    return () => {
      animated.removeAllListeners();
    };
  });



  return (
    <View style={{ width: radius * 2, height: radius * 2, }}>



      <View style={{ position: 'relative', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>

        <AnimatedTextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radius / 1.5, color: textColor ?? color, position: 'absolute', },
            styles.text
          ]}
        />

        <Text style={{ position: 'absolute', bottom: 10, fontSize: 12, color: donutTitleTextColor }}>Total Blah!</Text>

        <Svg
          height={radius * 3.5}
          width={radius * 3.5}
          // width={radius * 4}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
          <G
            rotation="-90"
            origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              ref={circleRef}
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDashoffset={circumference}
              strokeDasharray={circumference}
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeOpacity=".1"
            />
          </G>
        </Svg>

      </View>

    </View >

  )


}
export default Donut;

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
});
