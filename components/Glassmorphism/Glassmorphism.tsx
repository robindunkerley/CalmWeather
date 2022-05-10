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
  Text
} from "@shopify/react-native-skia";
import React from "react";
import { Dimensions } from "react-native";

export const Sun = () => {
  const progress = useLoop({ duration: 2000 });
  const start = useDerivedValue(
    () => sub(center, vec(0, mix(progress.current, r, r / 2))),
    [progress]
  );
  const end = useDerivedValue(
    () => add(center, vec(0, mix(progress.current, r, r / 2))),
    []
  );
  return (
    <Canvas>
        <LinearGradient
          start={start}
          end={end}
          colors={["yellow", "red"]}
        />
    </Canvas>
  )
}

const { width, height } = Dimensions.get("window");
const center = vec(width / 2, height / 2);
const r = center.x - 32;
const rect = { x: 0, y: height / 2, width: width, height: height / 2 };


export const Glassmorphism = () => {
  const progress = useLoop({ duration: 4000 });
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
    <Canvas style={{ flex: 1 }}>
      <Fill color="white" />
      <Circle c={center} r={radius}>
        <LinearGradient
          start={start}
          end={end}
          colors={["white", "red"]}
        />
      </Circle>
      <BackdropFilter filter={<Blur blur={10} />} clip={rect}>



        <Fill color="rgba(0, 0, 0, 0.15)" />
      </BackdropFilter>
    </Canvas>
  );
};
