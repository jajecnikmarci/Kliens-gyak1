import { useState } from 'preact/hooks';
import './LeftPane.css';
import { TextInputAndButton } from './TextInputAndButton';
import { chatService, ConversationDto } from './ChatService';
import { ConversationCard } from './ConversationCard';

export function LeftPane(
    { selected, onSelect }:
        {
            selected?:
            ConversationDto; onSelect:
            (conversation: ConversationDto) => void
        }
) {
    let [invite, setInvite] = useState("");
    return (
        <div class="LeftPane">
            <p>My tag: {chatService.inbox.user.tag}</p>
            <TextInputAndButton value={invite} onChange={setInvite} buttonContent="Invite"
                icon="add" placeholder="Tag"
                onClick={() => {
                    if (invite) {
                        setInvite("");
                        chatService.send({ type: "contactRequest", email: invite, firstMessage: "Hello" });
                    }
                }} />
            <div className={"conversations"}>
                {
                    chatService.inbox.conversations.map(c =>
                        <ConversationCard 
                            key={c.channelId} 
                            conversation={c}
                            selected={c === selected}
                            onSelect={() => onSelect(c)} 
                        />
                    )
                }
            </div>
        </div>
    );
}