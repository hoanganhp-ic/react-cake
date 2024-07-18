import { ReactElement } from "react";

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
            this is modal
        </>
    )
}

export default ModalLayout;
