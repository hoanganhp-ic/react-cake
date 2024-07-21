import { IcSpinner } from "../icons/IcSpinner";

type Props = {
    loading?: boolean;
    children?: React.ReactNode;
    color?: 'main' | 'primary';
    onClick?: () => void;
    disabled?: boolean;
}

const ButtonField = ({ children, loading, disabled,onClick, color }: Props) => {

    const handleOnclick = () => {
        if (disabled) {
            return;
        }
        onClick && onClick();
    };
    return (
        <div className={`btn btn-${color} ${disabled ? 'disabled' : ''}`} onClick={onClick && onClick}>
            {!loading 
                ? children 
                : <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem', color: '#fff' }}>
                    <IcSpinner width="32px" height="32px" />
                    {children}
                </div>
            }
        </div>
    );
}

export default ButtonField;
