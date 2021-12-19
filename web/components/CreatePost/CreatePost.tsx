import React, { useState } from "react";
import Button from '../Button/Button';
import { Modal, ModalProps } from "@material-ui/core";

const Backdrop = (props: any) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button title="Hello" onClick={handleOpen}>
                {props.children}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal-container">
                    {props.children}
                </div>
            </Modal>
        </>
    );
};

const CreatePost = () => {
    const [createPostModal, setCreatePostModal] = useState(false);
    const openCreatePostModal = () => {
        setCreatePostModal(true);
    }
    const closeCreatePostModal = () => {
        setCreatePostModal(false);
    }
    const createPostProps: ModalProps = {
        open: createPostModal,
        onClose: closeCreatePostModal,
        closeAfterTransition: true,
        BackdropComponent: Backdrop,
        BackdropProps: {
            timeout: 500,
        },
        children: (
            <div className="flex flex-col items-center justify-center w-1/12">
                <form action="">
                    <div>
                        Hello
                    </div>
                </form>
            </div>
        )
    }

    const postModal = createPostModal ? (
        <Modal {...createPostProps}
        />
    ) : null;


    return (
        <>
            <Button
                title="Create a Post..."
                // onClick={openCreatePostModal}
                onClick={() => { }}
            />
            {postModal}
        </>
    );
};

export default CreatePost;