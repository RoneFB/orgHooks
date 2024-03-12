import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import useProdutores from '../../../hooks/userProdutores';
import Produtor from './Produtor';

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores();

    const HeaderLista = () => {
        return <>
            <Topo/>
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList 
        data={lista} 
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({nome}) => nome.toLowerCase()}
        ListHeaderComponent={HeaderLista}/>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})