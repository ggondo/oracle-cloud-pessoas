import React, { useState } from 'react'
import { StyleSheet, 
        ToastAndroid
        } from 'react-native'
import {
    Button,
    Card,
    Input
 } from '@rneui/themed'

 import * as pessoaService from '../service/PessoaService'

const PessoaAddComponent = ({navigation}) => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [hobby, setHobby] = useState('')
    const addPessoa = async () => {
        try{
            pessoaService.cadastrarPessoa({nome:nome, idade: idade, hobby: hobby})
            console.log(res)
            ToastAndroid.show("Pessoa cadastrada com sucesso", ToastAndroid.LONG)
        }
        catch(e){
            console.log('erro', e)
            ToastAndroid.show('Falha. Tente novamente mais tarde', ToastAndroid.LONG)

        }
            }
  return (
  <>
    <Card
        containerStyle={styles.card}>
            <Card.Title> Cadastro de Pessoa </Card.Title>
            <Card.Divider></Card.Divider>
            <Input 
                placeholder='Digite o Nome'
                leftIcon={{type: 'font-awesome', name: 'user'}}
                style={styles.textInput}
                onChangeText={(nomeDigitado) => setNome(nomeDigitado)}
            />
            <Input
                placeholder='Digite a idade'
                leftIcon={{type: 'font-awesome', name: 'info'}}
                style={styles.textInput}
                onChangeText={(idadeDigitada) => setIdade(idadeDigitada)}
            />
            <Input
                placeholder='Digite o hobby'
                leftIcon={{type: 'font-awesome', name: 'heart'}}
                style={styles.textInput}
                onChangeText={(idadeDigitada) => setIdade(idadeDigitada)}

            />
            <Button 
                title='OK'
                onPress={addPessoa}
            />
    </Card>
  </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
    card: {
        padding: 18,
        borderRadius: 8
    },
    textInput: {
        textAlign: 'center',
        margin: 0,
        padding: 0
    }

})