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
  const center = vec(width / 2, height / 2);
  const r = center.x - 32;
  const rect = { x: 0, y: height / 2, width: width, height: height / 2};

    
  export const ClearNight = () => {
    const progress = useLoop({ duration: 10000 });
    const start = useDerivedValue(
      () => sub(center, vec(0, mix(progress.current, r, r / 2))),
      [progress]
    );
    const end = useDerivedValue(
      () => add(center, vec(0, mix(progress.current, r, r / 2))),
      []
    );
    const radius = useDerivedValue(
      () => mix(progress.current, r, r / 1.3),
      [progress]
    );
  
    return (
    <>
      <Canvas style={{ flex: 1}}>
        <Fill color="black" />
        <Circle c={center} r={radius}>
          <LinearGradient
            start={start}
            end={end}
            colors={["white", "blue"]}
          />
        </Circle>

        <BackdropFilter filter={

            <DisplacementMap channelX={'r'} channelY={'r'} scale={50}>
                <Turbulence freqX={0.01} freqY={0.09} octaves={4}/>
            </DisplacementMap>

        } clip={rect}>
            <Fill color="rgba(0, 0, 0, 0.8)" />
        </BackdropFilter>

      </Canvas>
     </>
    );
  };