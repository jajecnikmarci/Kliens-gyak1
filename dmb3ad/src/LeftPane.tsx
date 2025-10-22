import { useState } from 'preact/hooks';
import './LeftPane.css';
import { TextInputAndButton } from './TextInputAndButton';

export function LeftPane() 
{
    let [invite,setInvite] = useState("");
    return (
        <div class="LeftPane">
            <TextInputAndButton value={ invite } onChange={ setInvite } buttonContent="Invite" 
            icon="add" placeholder="Tag" /> 
        </div>
    );
}