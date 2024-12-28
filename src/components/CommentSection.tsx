"use client"
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

interface Comments {
    id: string;
    author: string;
    text: string;
}

interface CommentSectionProps {
    postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
    const [comment, setComments] = useState<Comments[]>([]);
    const [newComments, setnewComments] = useState('');
    const [AuthorName, setAuthorName] = useState('');
    const [editingCommentId, seteditingCommentId] = useState<string | null>(null);

    const handleAddComment = () => {
        if (newComments.trim() && AuthorName.trim()) {
            const newCommentObj: Comments = {
                id: new Date().toISOString(),
                author: AuthorName,
                text: newComments,
            };
            setComments([...comment, newCommentObj]);
            setnewComments('');
            setAuthorName('');
        }
    };

    const hanleEditComments = (commentID: string) => {
        const commentToEdit = comment.find((comment) => comment.id === commentID);
        if (commentToEdit) {
            setnewComments(commentToEdit.text);
            setAuthorName(commentToEdit.author);
            seteditingCommentId(commentID);
        }
    };

    const handleSaveEditedComment = () => {
        if (newComments.trim() && AuthorName.trim() && editingCommentId) {
            const UpdatedComments = comment.map((comment) =>
                comment.id === editingCommentId ?
                    { ...comment, text: newComments, author: AuthorName }
                    : comment
            );
            setComments(UpdatedComments);
            setnewComments('');
            setAuthorName('');
            seteditingCommentId(null);


        }
    };


    return (
        <div className="mt-8 ">
            <h2 className="text-2xl font-semibold">Comments</h2>
            <div className="mt-4 space-y-4">
                {comment.length > 0 ? (
                    comment.map((comment) => (
                        <Card key={comment.id}>
                            <CardContent className="p-4">
                                <div className="font-semibold">{comment.author}</div>
                                <p>{comment.text}</p>
                                <Button
                                    variant="link"
                                    className="mt-2 text-blue-500"
                                    onClick={() => hanleEditComments(comment.id)}>
                                    Edit
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (<p className="text-gray-400"> No Comment Yet</p>)
                }
            </div>

            <div className="mt-6">
                <Input
                    type="text"
                    value={AuthorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full mb-2" />

                <Input
                    type="text"
                    value={newComments}
                    onChange={(e) => setnewComments(e.target.value)}
                    placeholder="Add Your Comment"
                    className="w-full mb-2" />
                <Button
                onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
                className="mt-4">

                    {editingCommentId ? 'Save' : 'Submit'}
                    
                </Button>            
                
            </div>


        </div>
    )
}