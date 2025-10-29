import { useState } from "preact/hooks";
import { TextInputAndButton } from "./TextInputAndButton";
import "./RightPane.css";
import { chatService, ConversationDto } from "./ChatService";
import { MessageCard } from "./MessageCard";
import { IconButton } from "./IconButton";

export function RightPane(
  { conversation, onBack }:
      { 
        conversation?: ConversationDto,
        onBack: () => void
      }
) {
  let [message, setMessage] = useState("");
  return (
    <div class="RightPane">
      {!!conversation && <>
        <div class="conversation-header">
          <h2>{conversation.name}</h2>
          <IconButton
            icon="arrow_back"
            text="Back"
            onClick={() => { onBack() }}
            className="back-button"
          />
        </div>
        <div class="messages">
          {
            conversation.lastMessages.map(m =>
              <MessageCard
                key={m.timeStamp}
                message={m}
                own={m.senderId === chatService.inbox.user.id}
              />
            )
          }
        </div>
        <TextInputAndButton
          value={message}
          onChange={setMessage}
          buttonContent="Send"
          icon="send"
          placeholder="Write a message..."
          onClick={() => {
            chatService.send({
              type: "message", channelId: conversation.channelId, referenceTo: 0, contentType:
                0, content: message
            });
            setMessage("");
          }
          }
        />
      </>
      }
    </div>
  );

} 