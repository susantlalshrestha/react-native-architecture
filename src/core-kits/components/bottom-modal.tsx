import useHeaderHeight from "@core-kits/utilities/use-header-height";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { FC, ReactElement, useLayoutEffect, useMemo } from "react";
import { Dimensions, Modal, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import {
  gestureHandlerRootHOC,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export type BottomModalProps = {
  onDismiss: () => void;
  visible: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  headerContainerStyle?: StyleProp<ViewStyle>;
  headerContent?: () => ReactElement;
  headerTitle?: string;
  headerTitleStyle?: StyleProp<TextStyle>;
  mode?: "fullscreen" | "fullscreen-wrap" | "normal";
};

const BottomModal: FC<BottomModalProps> = ({
  visible,
  onDismiss,
  children,
  containerStyle,
  headerContainerStyle,
  headerContent,
  headerTitle,
  headerTitleStyle,
  mode,
}) => {
  const screenHeight = Dimensions.get("screen").height;
  const headerHeight = useHeaderHeight();
  const fullscreen = useMemo<boolean>(() => mode === "fullscreen", [mode]);
  const fullscreenWrap = useMemo<boolean>(() => mode === "fullscreen-wrap", [mode]);

  // animation properties
  const blur = useSharedValue(0);
  const slideY = useSharedValue(screenHeight);
  const rblurStyle = useAnimatedStyle(() => ({ opacity: blur.value }));
  const rSlideStyle = useAnimatedStyle(() => ({ transform: [{ translateY: slideY.value }] }));
  const hideModal = () => {
    "worklet";
    blur.value = withTiming(0, { duration: 350 });
    slideY.value = withTiming(screenHeight, { duration: 350 }, () => runOnJS(onDismiss)());
  };
  const showModal = () => {
    "worklet";
    blur.value = withTiming(1, { duration: 350 });
    slideY.value = withTiming(0, { duration: 350 });
  };

  // styles properties
  const fContainerStyles = StyleSheet.flatten([
    styles.defaultContainer,
    containerStyle,
    styles.container,
    fullscreen ? styles.fullScreen : fullscreenWrap ? styles.fullScreenWrap : { maxHeight: 0.75 * screenHeight },
  ]);
  const fHeaderContainerStyles = StyleSheet.flatten([
    styles.defaultHeaderContainer,
    headerContainerStyle,
    styles.headerContainer,
    { height: headerHeight },
  ]);
  const fHeaderTitleStyles = StyleSheet.flatten([styles.defaultHeaderTitle, headerTitleStyle, styles.headerTitle]);

  useLayoutEffect(() => {
    visible ? showModal() : hideModal();
  }, [visible]);

  const ModalContainer = gestureHandlerRootHOC(() => {
    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { translateY: number }>({
      onActive: (evt, ctx) => evt.translationY > 0 && (slideY.value = evt.translationY + ctx.translateY),
      onEnd: (evt) => (evt.velocityY > 20 ? hideModal() : showModal()),
      onStart: (evt, ctx) => (ctx.translateY = slideY.value),
    });

    return (
      <View style={{ height: "100%" }}>
        <Animated.View style={[styles.blurContainer, rblurStyle]} onTouchEnd={() => hideModal()}>
          <BlurView intensity={100} tint="dark" style={styles.blurView} />
        </Animated.View>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[fContainerStyles, rSlideStyle]}>
            {!fullscreen && <View style={styles.topLine} />}
            {(fullscreen || headerTitle || headerContent) && (
              <View style={fHeaderContainerStyles}>
                {headerContent && headerContent()}
                {!headerContent && fullscreen && (
                  <MaterialIcons
                    name="close"
                    size={headerHeight * 0.6}
                    style={styles.headerClose}
                    onPress={hideModal}
                  />
                )}
                {!headerContent && headerTitle && <Text style={fHeaderTitleStyles}>{headerTitle}</Text>}
              </View>
            )}
            <ScrollView>{children}</ScrollView>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  });

  return (
    <Modal animationType="none" onRequestClose={() => hideModal()} transparent={true} visible={visible}>
      <ModalContainer />
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  blurView: { height: "100%", width: "100%" },
  defaultContainer: {
    backgroundColor: "white",
  },
  container: {
    borderTopEndRadius: 14,
    borderTopStartRadius: 14,
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  fullScreen: {
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    height: "100%",
  },
  fullScreenWrap: {
    height: "99%",
  },
  topLine: {
    alignSelf: "center",
    backgroundColor: "black",
    height: 2,
    marginBottom: 8,
    marginTop: 8,
    width: "12%",
  },
  defaultHeaderContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  headerContainer: {
    flexDirection: "row",
    position: "relative",
    width: "100%",
  },
  headerClose: {
    padding: 4,
    textAlign: "center",
    textAlignVertical: "center",
  },
  defaultHeaderTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  headerTitle: {
    flex: 1,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default BottomModal;
