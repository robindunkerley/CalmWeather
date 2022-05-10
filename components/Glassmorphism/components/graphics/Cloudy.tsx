import {
    add,
    Canvas,
    Circle,
    LinearGradient,
    vec,
    sub,
    Fill,
    useLoop,
    mix,
    BackdropFilter,
    Blur,
    useDerivedValue,
    Text,
    DisplacementMap,
    Turbulence
  } from "@shopify/react-native-skia";
  import React from "react";
  import { Dimensions } from "react-native";
  
  
  const { width, height } = Dimensions.get("window");
  const center = vec(width / 2, height / 4);
  const center2 = vec(width / 4, height / 3.5);
  const r = center.x - 32;
  const rect = { x: 0, y: height / 600, width: width, height: height };
  
  
  export const Cloudy = () => {
    const progress = useLoop({ duration: 12000 });
    const progressTwo = useLoop({duration: 2000})
    const start = useDerivedValue(
      () => sub(center, vec(0, mix(progress.current, r, r * 2))),
      [progress]
    );
    const end = useDerivedValue(
      () => add(center, vec(0, mix(progress.current, r, r))),
      []
    );

    const startTwo = useDerivedValue(
        () => sub(center2, vec(0, mix(progressTwo.current, r, r / 2))),
        [progress]
      );
      const endTwo = useDerivedValue(
        () => add(center2, vec(0, mix(progressTwo.current, r, r))),
        []
      );
    const radius = useDerivedValue(
      () => mix(progress.current, r, r / 0.8),
      [progress]
    );
  
    return (
      <Canvas style={{ flex: 1 }}>
        <Fill color='#aad4e5' />

    
        <Circle c={center} r={radius}>
          <LinearGradient
            start={start}
            end={end}
            colors={["white", 'lightgrey']}
          />
        </Circle>
        <Circle c={center2} r={radius}>
          <LinearGradient
            start={startTwo}
            end={endTwo}
            colors={["white", 'lightgrey']}
          />
        </Circle>

        <BackdropFilter filter={
            <Blur blur={5}>
            <DisplacementMap channelX={'r'} channelY={'r'} scale={50}>
                <Turbulence freqX={0.03} freqY={0.03} octaves={4}/>
            </DisplacementMap>
            </Blur>
        } clip={rect}>
        
  
  
          <Fill color="rgba(0, 0, 0, 0.1)" />
        </BackdropFilter>
      </Canvas>
    );
  };