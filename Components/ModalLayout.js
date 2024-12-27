import Modal from "react-modal";
import { useEffect } from "react";
export default function ModalLayout({ children, btn_name, openModal }) {
  useEffect(() => {
    // Set app element after the DOM is loaded
    Modal.setAppElement("#__next");
  }, []);
  return (
    <>
      <div>
        <button>{btn_name}</button>
        <Modal
          isOpen={openModal}
          onRequestClose={!openModal}
          contentLabel="Example Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              color: "black",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "500px",
              margin: "auto",
            },
          }}
        >
          {children}
        </Modal>
      </div>
    </>
  );
}
