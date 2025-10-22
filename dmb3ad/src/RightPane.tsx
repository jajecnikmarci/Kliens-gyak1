import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";
import "./RightPane.css";

export function RightPane() 
{ 
 let [ message, setMessage ] = useState( "" ); 
 return <div class="RightPane"> 
  <div /> 
  <TextInputAndButton value={ message } onChange={ setMessage } buttonContent="Send" 
   icon="send" placeholder="Write a message..."/> 
 </div> 
} 