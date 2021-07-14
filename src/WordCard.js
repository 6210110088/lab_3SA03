import React, { useState } from 'react';
import _ from 'lodash'
import CharacterCard from './CharacterCard';

const things = ['Rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random()*things.length)];

const prepareStateFromWord = () => {
    // let word = given_word.toUpperCase()
    let wordlist = things
    return {
        // word,
        wordlist,
        attempt: 1,
        guess: '',
        completed: false,
        com_point: 0,
        player_point: 0

    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord())

    const activationHandler = word => {
        // console.log(`${c} has been activate`)

        // let guess = state.guess + c
        // setState({...state, guess})
        
        // if(guess.length == state.word.length){
        //     if(guess == state.word){
        //         console.log('yeah!')
        //         setState({...state, completed: true})
        //     }else{
        //         console.log('reset, next attempt')
        //         setState({...state, guess: '', attempt: state.attempt + 1})
        //     }
        // }

        console.log(word)
    }

    return (
        <div>
            {
                state.wordlist.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
            }
        </div>
    )
}