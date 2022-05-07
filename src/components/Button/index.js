import React, { useState } from 'react';
// 1 - importe o useDispatch 
import { useDispatch} from "react-redux";

// 2 - importe o seu thunk
import { addCommentThunk } from '../../store/modules/user/thunks';

import * as S from "./style.js" 
function Button() {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()
    
    const handleComment = () => dispatch(addCommentThunk(comment))
  
    return (
        <>
      
            <S.Input onChange={(event)=> setComment(event.target.value)}/> 
            <S.Button onClick={handleComment}>new comment</S.Button>
        </>
        
    )
}

export default Button;
