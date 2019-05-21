import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCards.js';

const login = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning</h4>
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                timeAgo="Todat at 4:45pm" 
                content="Nice blog post!"
                avatar={faker.image.avatar()}
            />
             </ApprovalCard>
             <ApprovalCard>
                <CommentDetail 
                author="Alex"  
                timeAgo="Todat at 5:45am" 
                content="I like the subject"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail 
            author="Jane"  
            timeAgo="Todat at 6:45pm" 
            content=" Way to go"
            avatar={faker.image.avatar()}
            />
            </ApprovalCard>
            
        </div>
       

    );
};