import { useContext } from "react";

import { ModalContext } from "../providers/ModalContextProvider";
import { ModalContextType } from "../../types/ModalContextType";

const useModal = () => {
    const modalContext = useContext<ModalContextType | undefined>(ModalContext);

    if (!modalContext) throw new Error("useModal must be used within a ModalContextProvider");

    return modalContext;
};
export default useModal;