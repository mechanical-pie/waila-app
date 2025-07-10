import React, { useEffect, useRef } from 'react';
import { Modal, Text, Pressable, View, Animated, Easing } from 'react-native';
import styles from "@/css/Modals/Modal";

// @ts-ignore
export default function CleanModal({ visible, onClose, }) {
    const bgOpacity = useRef(new Animated.Value(0)).current;
    const modalScale = useRef(new Animated.Value(0.8)).current;
    const isAnimating = useRef(false);

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

    useEffect(() => {
        if (visible) {
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
    }, [visible]);

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
                    <Text style={styles.modalText}>Deleting content</Text>
                    <Text style={styles.modalSubText}>You delete all your content. It cannot be restored.</Text>
                    <Text style={styles.modalSubText}>Proceed?</Text>

                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.cancelButton]}
                            onPress={handleClose}
                        >
                            <Text style={styles.buttonText}>No</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.deleteButton]}
                            onPress={handleClose}
                        >
                            <Text style={styles.buttonText}>Yes</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
}