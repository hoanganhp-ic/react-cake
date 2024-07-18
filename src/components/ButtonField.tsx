import { IcSpinner } from "../icons/IcSpinner";

type Props = {
    loading?: boolean;
    children?: React.ReactNode;
    color?: 'main' | 'primary';
    onClick?: () => void;
}

const ButtonField = ({ children, loading, onClick, color }: Props) => {
    return (
        <div className={`btn btn-${color}`} onClick={onClick && onClick}>
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
