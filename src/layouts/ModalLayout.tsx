import { ReactElement } from "react";
import ButtonField from "../components/ButtonField";

type Props = {
    width?: string;
    children?: ReactElement;
    title?: string;
    isShow?: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
}

const ModalLayout = ({ width, children, title, isShow, onClose, onConfirm }: Props) => {
    return (
        <>
            {isShow && (
                <div className="wrapper-modal">
                    <div className="wrapper-modal-body" style={{ width }}>
                        {!children ? (
                            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
                                <div style={{ fontSize: '22px', textAlign: 'center' }}>{title}</div>
                                <div style={{ display: 'flex', columnGap: '1rem', justifyContent: 'center' }}>
                                    <ButtonField color="primary" onClick={onClose}>キャンセル</ButtonField>
                                    <ButtonField onClick={onConfirm}>確認</ButtonField>
                                </div>
                            </div>
                        ) 
                        : children }
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalLayout;
