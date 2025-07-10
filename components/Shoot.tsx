import React, { useState, useRef, useEffect, useCallback } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Pressable, Animated} from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import FlashIconOff from "@/components/Icons/FlashIconOff";
import FlashIconOn from "@/components/Icons/FlashIconOn";
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const getPadding = () => {
    if (width <= 360) return 20;
    return 30;
};

export default function Shoot() {
    const navigation = useNavigation();

    const [isActive, setIsActive] = useState(true);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const [hasMediaPermission, setHasMediaPermission] = useState<boolean | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);
    const [facing, setFacing] = useState<'front' | 'back'>('back');
    const [flash, setFlash] = useState<'on' | 'off'>('off');
    const [showSavedNotification, setShowSavedNotification] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const cameraRef = useRef<CameraView>(null);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const mediaStatus = await MediaLibrary.requestPermissionsAsync();
            setHasMediaPermission(mediaStatus.status === 'granted');
        })();
    }, []);

    const showNotification = () => {
        setShowSavedNotification(true);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setShowSavedNotification(false);
            });
        }, 2000);
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                setPhoto(photo.uri);
            } catch (error) {
                console.log('Ошибка при съемке:', error);
            }
        }
    };

    const savePhotoToGallery = async () => {
        if (photo && hasMediaPermission) {
            try {
                await MediaLibrary.saveToLibraryAsync(photo);
                showNotification();
            } catch (error) {
                console.log('Ошибка при сохранении фото:', error);
            }
        }
    };

    const toggleCameraType = () => {
        setFacing(current => current === 'back' ? 'front' : 'back');
    };

    const toggleFlash = () => {
        setFlash(current => current === 'off' ? 'on' : 'off');
    };

    const handlePress = () => {
        navigation.goBack();
        setIsActive(false);
    };

    useFocusEffect(
        useCallback(() => {
            setIsActive(true);
            return () => {
                setIsActive(false);
            };
        }, [])
    );

    if (hasCameraPermission === false) {
        return <Text>Нет доступа к камере</Text>;
    }

    return (
        <View style={styles.container}>
            {!photo ? (
                isActive ? (
                    <CameraView
                        style={styles.camera}
                        facing={facing}
                        flash={flash}
                        ref={cameraRef}
                    >
                        <View style={styles.buttonContainer}>
                            <Pressable style={styles.backButton} onPress={handlePress}>
                                <Text style={styles.backButtonText}>Back</Text>
                            </Pressable>
                            <Pressable style={styles.captureButton} onPress={takePicture}>
                                <View style={styles.smallCaptureButton}></View>
                            </Pressable>
                            <Pressable style={styles.flashButton} onPress={toggleFlash}>
                                {flash === 'off' ? <FlashIconOff /> : <FlashIconOn />}
                            </Pressable>
                            <Pressable style={styles.flipButton} onPress={toggleCameraType}>
                                <Text style={styles.flipButtonText}>Switch</Text>
                            </Pressable>
                        </View>
                    </CameraView>
                ) : null
            ) : (
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: photo }} style={styles.camera} />
                    <View style={styles.photoControls}>
                        <Pressable
                            style={styles.newpPhotoButton}
                            onPress={() => setPhoto(null)}
                        >
                            <Text style={styles.newpPhotoButtonText}>Take again</Text>
                        </Pressable>
                        <Pressable
                            style={styles.newpPhotoButton}
                            onPress={savePhotoToGallery}
                        >
                            <Text style={styles.newpPhotoButtonText}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            )}

            {showSavedNotification && (
                <Animated.View style={[styles.notification, { opacity: fadeAnim }]}>
                    <Text style={styles.notificationText}>Фото сохранено</Text>
                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        position: 'relative',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: getPadding(),
        marginBottom: 30,
        marginHorizontal: getPadding(),
    },
    flipButton: {
        width: 83,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flashButton: {
        width: 83,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0
    },
    flashButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    flipButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    backButton: {
        width: 83,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    captureButton: {
        width: 62,
        height: 62,
        borderRadius: 31,
        borderWidth: 5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallCaptureButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: '#ffffff'
    },
    photoControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 30,
        paddingHorizontal: getPadding(),
    },
    newpPhotoButton: {
        width: 114,
        height: 50,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#83AB43',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    newpPhotoButtonText: {
        fontFamily: 'Staatliches',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
    notification: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -100 }, { translateY: -25 }],
        width: 200,
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF'
    },
});