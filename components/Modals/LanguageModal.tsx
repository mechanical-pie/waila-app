import React, { useEffect, useRef, useState } from 'react';
import { Modal, Text, Pressable, View, Animated, Easing, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "@/css/Modals/Modal";

interface LanguageModalProps {
    visible: boolean;
    onClose: () => void;
    onLanguageSelect?: (language: string) => void;
    currentLanguage?: string;
}

export default function LanguageModal({ visible, onClose, onLanguageSelect, currentLanguage = 'english' }: LanguageModalProps) {
    const bgOpacity = useRef(new Animated.Value(0)).current;
    const modalScale = useRef(new Animated.Value(0.8)).current;
    const isAnimating = useRef(false);
    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

    const handleClose = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        Animated.parallel([
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(modalScale, {
                toValue: 0.7,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            })
        ]).start(({ finished }) => {
            if (finished) {
                isAnimating.current = false;
                onClose();
            }
        });
    };

    const handleConfirm = () => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        Animated.parallel([
            Animated.timing(bgOpacity, {
                toValue: 0,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(modalScale, {
                toValue: 0.7,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            })
        ]).start(({ finished }) => {
            if (finished) {
                isAnimating.current = false;
                if (onLanguageSelect) {
                    onLanguageSelect(selectedLanguage);
                }
                onClose();
            }
        });
    };

    useEffect(() => {
        if (visible) {
            setSelectedLanguage(currentLanguage);
            isAnimating.current = true;
            Animated.parallel([
                Animated.timing(bgOpacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(modalScale, {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.out(Easing.back(1.1)),
                    useNativeDriver: true,
                })
            ]).start(({ finished }) => {
                isAnimating.current = !finished;
            });
        }
    }, [visible, currentLanguage]);

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={handleClose}
            animationType="none"
        >
            <Animated.View style={[styles.centeredView, { opacity: bgOpacity }]}>
                <Animated.View
                    style={[
                        styles.modalView,
                        {
                            transform: [{ scale: modalScale }],
                        }
                    ]}
                >
                    <Text style={styles.modalText}>Language selection</Text>
                    <Text style={styles.modalSubText}>List of available languages to choose from</Text>

                    {/* Кастомные радио-кнопки */}
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.radioButton}
                            onPress={() => setSelectedLanguage('english')}
                        >
                            <View style={styles.radioCircle}>
                                {selectedLanguage === 'english' && <View style={styles.selectedRb} />}
                            </View>
                            <Text style={styles.radioText}>English</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.radioButton}
                            onPress={() => setSelectedLanguage('russian')}
                        >
                            <View style={styles.radioCircle}>
                                {selectedLanguage === 'russian' && <View style={styles.selectedRb} />}
                            </View>
                            <Text style={styles.radioText}>Русский</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.cancelButton]}
                            onPress={handleClose}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.deleteButton]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.buttonText}>Confirm</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
}