import './TextInputAndButton.css';

import { TextInput, TextInputProps } from "./TextInput";
import { IconButton } from "./IconButton";

export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    icon: string;
    onClick?: () => void;
}

export function TextInputAndButton({ buttonContent, icon, onClick, ...textInputProps }:
    TextInputAndButtonProps)
{
    return <div class="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick} />
        <IconButton icon={icon} text={buttonContent} onClick={onClick} />
    </div>
} 