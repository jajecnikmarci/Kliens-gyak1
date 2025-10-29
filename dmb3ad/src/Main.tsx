import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import "./Main.css";
import { useState } from "preact/hooks";
import { ConversationDto } from "./ChatService";

export function Main() {
    let [selected, setSelected] = useState<ConversationDto | undefined>();
    return (
        <div class={`Main ${selected === undefined ? 'left' : 'right'}`}>
            <LeftPane selected={selected} onSelect={setSelected} />
            <RightPane conversation={selected} onBack={() => setSelected(undefined)} />
        </div>
    );
}