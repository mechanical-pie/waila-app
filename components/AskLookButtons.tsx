import React, { useState } from 'react';
import styles from '@/css/AskLookButtons';
import { Pressable, View, Text } from "react-native";
import AskIcon from "@/components/Icons/AskIcon";
import LookIcon from "@/components/Icons/LookIcon";
import RecIcon from "@/components/Icons/RecIcon";
import { useNavigation } from "@react-navigation/native";
import { Audio } from 'expo-av';

export default function AskLookButtons() {
    const navigation = useNavigation();
    const [showRecorder, setShowRecorder] = useState(false);
    const [showTextBlock, setShowTextBlock] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedText, setRecordedText] = useState('');
    const [recording, setRecording] = useState<Audio.Recording | null>(null);

    const handlePress = (menu: string) => {
        // @ts-ignore
        navigation.navigate(menu);
    };

    const handleAskPress = () => {
        setShowRecorder(true);
        setShowTextBlock(true);
    };

    const handleBackPress = async () => {
        if (isRecording && recording) {
            await stopRecording();
        }

        setShowRecorder(false);
        setShowTextBlock(false);
        setRecordedText('');
    };

    const startRecording = async () => {
        try {
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            setIsRecording(true);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Failed to start recording', err.message);
            }
        }
    };

    const stopRecording = async () => {
        setIsRecording(false);
        if (!recording) return;

        try {
            await recording.stopAndUnloadAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
            });

            // Здесь должна быть реализация отправки аудио на сервер
            // для преобразования речи в текст. Это примерная реализация:
            setRecordedText("Ваш запрос: [распознанный текст]");

            // В реальном приложении вам нужно:
            // 1. Получить URI записи: recording.getURI()
            // 2. Отправить аудиофайл на ваш сервер
            // 3. Использовать сервис распознавания речи (Google Cloud Speech-to-Text и т.д.)
            // 4. Получить и отобразить результат

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Failed to stop recording', err.message);
                setRecordedText("Ошибка записи");
            }
        }
    };

    return (
        <View style={styles.buttonsBlock}>
            {showTextBlock && (
                <View style={styles.textBlock}>
                    <Text style={styles.textBlockItem}>{recordedText}</Text>
                </View>
            )}

            {!showRecorder ? (
                <View style={styles.buttonsBlockItem}>
                    <Pressable style={styles.button} onPress={handleAskPress}>
                        <AskIcon />
                        <Text style={styles.buttonsText}>Ask</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handlePress('Shoot')}>
                        <LookIcon />
                        <Text style={styles.buttonsText}>Look</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.recButtonsBlockItem}>
                    <View style={styles.recButtonBlock}>
                        <RecIcon />
                        <Text style={styles.recButtonText}>
                            {isRecording ? 'RECORDING' : 'REC'}
                        </Text>
                        <Pressable
                            style={[
                                styles.recButton,
                                isRecording ? styles.recordingActive : null
                            ]}
                            onPress={isRecording ? stopRecording : startRecording}

                        >
                            <View style={styles.recButtonSmall} />
                        </Pressable>
                    </View>
                    <Pressable style={styles.backButton} onPress={handleBackPress}>
                        <Text style={styles.buttonsText}>Back</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}