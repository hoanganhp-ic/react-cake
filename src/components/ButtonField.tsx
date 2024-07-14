import { IcSpinner } from "../icons/IcSpinner";

type Props = {
    loading?: boolean;
    children?: React.ReactNode;
}

const ButtonField = ({ children, loading }: Props) => {
    return (
        <div className="btn-main">
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
