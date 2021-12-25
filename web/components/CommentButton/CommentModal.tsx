import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, Typography } from "@material-ui/core";
import Button from '../Button/Button';
import Comment from "../../types/Comment";

interface CommentModalProps {
    open: boolean;
    onClose: () => void;
    comments?: Comment[];
}

const CommentsModal: React.FC<CommentModalProps> = ({ open, onClose, comments }) => {
    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogContent role={"document"}>
                    <Typography component={'span'} variant="h4">
                        Comments
                    </Typography>
                    {
                        comments?.map((comment, index) => (
                            <DialogContentText key={index}>
                                <Typography component={'span'} variant="h6">
                                    {comment.author}
                                </Typography>
                                <Typography component={'span'} variant="body1">
                                    {comment.comment}
                                </Typography>
                            </DialogContentText>
                        ))
                    }
                </DialogContent>
                <DialogActions>
                    <Button title='Close' onClick={onClose} />
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CommentsModal;