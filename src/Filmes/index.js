import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";

import Detalhes from '../Modal'; // Certifique-se de criar o componente Detalhes

export default function Filmes({ data }) {
    const [visibleModal, setVisibleModal] = useState(false);
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.title}>{data.nome}</Text>

                <Image
                    source={{ uri: data.foto }}
                    style={styles.cover}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btn} onPress={() => setVisibleModal(true)}>
                        <Text style={styles.buttonText}>Leia mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <Detalhes filme={data} voltar={ () => setVisibleModal(false)}/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    cover: {
        height: 250,
        zIndex: 2,
    },
    title: {
        padding: 15,
        fontSize: 18,
    },
    areaBtn: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    btn: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5, 
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center', 
    }
});