import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Text, View, Image, Dimensions, Pressable, Animated} from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import FlashIconOff from "@/components/Icons/FlashIconOff";
import FlashIconOn from "@/components/Icons/FlashIconOn";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AskRetakeButtons from "@/components/AskRetakeButtons";
import ClosePhotoIcon from "@/components/Icons/ClosePhotoIcon";
import styles from '@/css/Shoot';
import AskIcon from "@/components/Icons/AskIcon";

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
    const [showRecorder, setShowRecorder] = useState(false); // Новое состояние для показа записи

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
                return true;
            } catch (error) {
                console.log('Ошибка при сохранении фото:', error);
                return false;
            }
        }
        return false;
    };

    const toggleCameraType = () => {
        setFacing(current => current === 'back' ? 'front' : 'back');
    };

    const toggleFlash = () => {
        setFlash(current => current === 'off' ? 'on' : 'off');
    };

    const handlePress = () => {
        navigation.goBack();
    };

    useFocusEffect(
        useCallback(() => {
            setIsActive(true);
            return () => {
                setIsActive(false);
            };
        }, [])
    );

    const handleRetake = () => {
        setPhoto(null);
        setShowRecorder(false); // Сбрасываем показ записи при пересъемке
    };

    const handleAskPress = async () => {
        const saved = await savePhotoToGallery();
        if (saved) {
            setShowRecorder(true); // Показываем блок записи после сохранения
        }
    };

    const handleBackFromRecorder = () => {
        setShowRecorder(false); // Скрываем блок записи
    };

    if (hasCameraPermission === false) {
        return <Text>No camera access</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            {!photo ? (
                isActive ? (
                    <View style={styles.container}>
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
                    </View>
                ) : null
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={styles.headerBlock}>
                        <Text style={styles.headerBlockText}>Image from camera</Text>
                        <Pressable onPress={handleRetake}>
                            <ClosePhotoIcon />
                        </Pressable>
                    </View>
                    <View style={styles.photoContainer}>
                        <Image source={{ uri: photo }} style={styles.camera} resizeMode='cover'/>
                    </View>

                    {!showRecorder && (
                        <View style={styles.buttonContainerItem}>
                            <Pressable
                                style={styles.saveButton}
                                onPress={handleAskPress}
                            >
                                <AskIcon />
                                <Text style={styles.saveButtonText}>Ask</Text>
                            </Pressable>
                        </View>
                    )}

                    <View style={styles.photoControls}>
                        <AskRetakeButtons
                            onRetake={handleRetake}
                            onSave={savePhotoToGallery}
                            showRecorder={showRecorder}
                            onBackFromRecorder={handleBackFromRecorder}
                        />
                    </View>
                </View>
            )}

            {showSavedNotification && (
                <Animated.View style={[styles.notification, { opacity: fadeAnim }]}>
                    <Text style={styles.notificationText}>Photo saved</Text>
                </Animated.View>
            )}
        </View>
    );
}