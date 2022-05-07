import React from 'react';
import { useSelector } from 'react-redux';
import * as S from "./style.js"


function Card() {
    const user = useSelector((state)=> state.user)
    const {comments} = user
    console.log(comments)
    return (
        <S.Card>
            {
                comments.map((comment, index)=>(
        
                        comment !== "" 
                        ?
                        <h1 key={index}> {comment}</h1>
                        :
                        ""
                    
                    
                )

            )}
            
        </S.Card>
    )
}

export default Card;
