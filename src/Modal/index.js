import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={props.voltar}>
                    <Text style={styles.btnBack}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titleFilm}>{props.filme.nome}</Text>
                <Text style={styles.synopsis}>Sinopse:</Text>
                <Text style={styles.description}>
                   {props.filme.sinopse}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: '#44bae3',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    btnBack: {
        backgroundColor: '#e1ebf5',
        padding: 10,
        fontSize: 16,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titleFilm: {
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold',
    },
    synopsis: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10,
    },
    description: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
    }
});