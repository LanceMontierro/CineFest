import {View, Text, Image, Dimensions} from 'react-native'
import React from 'react'
import {Marquee} from '@animatereactnative/marquee'
import {
    FadeIn,
    FadeInUp,
    FadeOut, interpolate,
    runOnJS,
    SharedValue,
    useAnimatedReaction, useAnimatedStyle,
    useSharedValue
} from "react-native-reanimated";
import { StyleSheet } from 'react-native';
import Animated from "react-native-reanimated"
import {Stagger} from "@animatereactnative/stagger";
import {Easing} from "react-native-reanimated";


const images = [
    require('../../assets/images/poster1.png'),
    require('../../assets/images/poster2.png'),
    require('../../assets/images/poster3.png'),
    require('../../assets/images/poster4.png'),
    require('../../assets/images/poster5.png'),
    require('../../assets/images/poster6.png'),
    require('../../assets/images/poster7.png'),
    require('../../assets/images/poster8.png'),
    require('../../assets/images/poster9.png'),
];

const {width} = Dimensions.get('window');
const _itemWidth = width * 0.62;
const _itemHeight = _itemWidth * 1.67;
const _spacing = 16;
const _itemSize = _itemWidth + _spacing;

function Item({image, index, offset }: {image: any, index: number; offset: SharedValue<number>;}) {

    const _stylez = useAnimatedStyle(() => {
        const itemPosition = index * _itemSize;
        const totalSize = images.length * _itemSize;
        const range = ((itemPosition - offset.value) % totalSize) + width + _itemSize / 2;

        if (index == 0){
            (range);
        }

        return {
            transform: [
                {
                    rotate: `${interpolate(range, [- _itemSize, (width - _itemSize) / 2, width], [-3, 0, 3])}deg`
                }
            ]
        }
    });

    return (
        <Animated.View style={[
            {
        width: _itemWidth,
        height: _itemHeight,
        },

        _stylez
        ]}>

        <Image source={image}
        className="flex-1 rounded-[16]"
        />
    </Animated.View>
    );
}

const Homestyle = () => {
    const offset = useSharedValue(0);
    const [activeIndex, setActiveIndex] = React.useState(0);

    useAnimatedReaction(() => {
            const floatIndex = (offset.value  / _itemSize) % images.length;
            return Math.abs(Math.floor(floatIndex));
        },
        (value) => {
            runOnJS(setActiveIndex)(value);

    });

    return (
        <View className="flex-1 justify-center items-center bg-black">

            <View style={[StyleSheet.absoluteFillObject, {opacity: 0.5}]} >
                <Animated.Image
                    key={`image-${activeIndex}`}
                    source={images[activeIndex]}
                    className="flex-1 w-full"
                    resizeMode="cover"
                    blurRadius={50}
                    entering={FadeIn.duration(1000)}
                    exiting={FadeOut.duration(1000)}
                />
            </View>
            <Marquee
            spacing={_spacing}
            position={offset}
            >
                <Animated.View
                    className="flex-row gap-16"
                    entering={FadeInUp
                        .delay(500)
                        .duration(1000)
                        .easing(Easing.elastic(0.9))
                        .withInitialValues({transform: [{ translateY: - _itemHeight / 2 }],
                        })}
                >
                    {images.map((image, index) => (
                         <Item
                             key={`image-${index}`}
                            image={image}
                            index={index}
                             offset={offset}
                        />
                    ))}
                </Animated.View>
            </Marquee>
            <Stagger initialEnteringDelay={1000} duration={500} stagger={500} style={{flex: .4, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: "white", fontSize: 30, fontWeight: "600"}}>
                    Welcome to CineFest!
                </Text>
                <Text style={{color: "white", fontSize: 15, marginTop: 8}}>
                    Your ultimate app for finding METRO MANILA FILMS!
                </Text>
            </Stagger>
        </View>
    )
}
export default Homestyle
