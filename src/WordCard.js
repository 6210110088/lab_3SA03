import React, { useState } from 'react';
import _ from 'lodash'
import CharacterCard from './CharacterCard';

const things = ['Rock', 'Paper', 'Scissor'];

const randomWord = () =>{
    return things[Math.floor(Math.random()*things.length)]
}

const prepareStateFromWord = () => {
    // let word = given_word.toUpperCase()
    let wordlist = things
    return {
        // word,
        wordlist,
        attempt: 1,
        com_guess: randomWord(),
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

        setState({...state, com_guess: randomWord()})

        if(word == things[2]){
            if(state.com_guess == things[0]){
                setState({...state, com_point: state.com_point + 1})
                console.log('Com get point')
            }else if(state.com_guess == things[1]){
                setState({...state, player_point: state.player_point + 1})
                console.log('Player get point')
            }else{
                console.log('Draw')
            }
        }
        else if(word == things[1]){
            if(state.com_guess == things[2]){
                setState({...state, com_point: state.com_point + 1})
                console.log('Com get point')
            }else if(state.com_guess == things[0]){
                setState({...state, player_point: state.player_point + 1})
                console.log('Player get point')
            }else{
                console.log('Draw')
            }
        }
        else if(word == things[0]){
            if(state.com_guess == things[1]){
                setState({...state, com_point: state.com_point + 1})
                console.log('Com get point')
            }else if(state.com_guess == things[2]){
                setState({...state, player_point: state.player_point + 1})
                console.log('Player get point')
            }else{
                console.log('Draw')
            }
        }
        
        if(state.player_point == 5){
            console.log('Player win!')
            setState({...state, completed: true})
        }else if(state.com_point == 5){
            console.log('Com win!')
            setState({...state, completed: true})
        }

        console.log(word)
        console.log(state.com_guess)
    }
    if(!state.completed)
        return (
            <div>
                {
                    state.wordlist.map((c, i) =>
                        <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
                }
            </div>
        )
    else if(state.completed)
        return(
            <div>
                Game Over
                <div onClick={setState(prepareStateFromWord())} >
                    Play again
                </div>
            </div>
        )
}