export type IconButtonProps = {
    icon: string;
    text?: string;
    onClick?: () => void;
    className?: string;
};

export function IconButton({ icon, text, onClick, className, ...buttonProps }: IconButtonProps) {
    return (
        <button type="button" class={`IconButton ${className || ''}`} onClick={onClick} {...buttonProps}>
            <span class="material-symbols-outlined">
                {icon}
            </span>
            {text}
        </button>
    );
}