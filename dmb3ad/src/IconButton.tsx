export type IconButtonProps = {
    icon: string;
    text?: string;
    onClick?: () => void;
};

export function IconButton({ icon, text, onClick, ...buttonProps }: IconButtonProps) {
    return (
        <button type="button" class="IconButton" onClick={onClick} {...buttonProps}>
            <span class="material-symbols-outlined">
                {icon}
            </span>
            {text}
        </button>
    );
}