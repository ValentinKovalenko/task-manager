import {ReactNode} from "react";

export interface ModalContextProps {
    isOpen: boolean;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    content: ReactNode | null;
}