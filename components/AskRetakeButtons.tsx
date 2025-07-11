import React, { useState } from 'react';
import styles from '@/css/AskLookButtons';
import { Pressable, View, Text } from "react-native";
import LookIcon from "@/components/Icons/LookIcon";
import RecIcon from "@/components/Icons/RecIcon";
import { Audio } from 'expo-av';

interface AskRetakeButtonsProps {
    onRetake?: () => void;
    onSave?: () => void;
    showRecorder?: boolean;
    onBackFromRecorder?: () => void;
}

export default function AskRetakeButtons({
                                             onRetake,
                                             onSave,
                                             showRecorder = false,
                                             onBackFromRecorder
                                         }: AskRetakeButtonsProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [recordedText, setRecordedText] = useState('');
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [showTextBlock, setShowTextBlock] = useState(false); // Добавлено состояние для текста

    const handleSavePress = async () => {
        if (onSave) {
            await onSave();
        }
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
            setShowTextBlock(false); // Скрываем текст при новой записи
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Recording error:', err.message);
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

            // Здесь будет результат распознавания
            setRecordedText("Your request: [recognized text]");
            setShowTextBlock(true); // Показываем текст после записи

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Stop recording error:', err.message);
                setRecordedText("Recording error");
                setShowTextBlock(true);
            }
        }
    };

    return (
        <View style={styles.buttonsBlock}>
            {/* Блок с распознанным текстом */}
            {showTextBlock && (
                <View style={styles.textBlock}>
                    <Text style={styles.textBlockItem}>{recordedText}</Text>
                </View>
            )}

            {showRecorder ? (
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
                    <Pressable
                        style={styles.backButton}
                        onPress={() => {
                            setShowTextBlock(false); // Скрываем текст при возврате
                            onBackFromRecorder?.();
                        }}
                    >
                        <Text style={styles.buttonsText}>Back</Text>
                    </Pressable>
                </View>
            ) : (
                <View style={styles.buttonsBlockItem}>
                    <Pressable style={styles.button} onPress={handleSavePress}>
                        <Text style={styles.buttonsText}>Save</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={onRetake}>
                        <LookIcon />
                        <Text style={styles.buttonsText}>Retake</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}