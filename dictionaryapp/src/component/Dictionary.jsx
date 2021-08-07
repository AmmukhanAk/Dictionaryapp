import React from 'react';
import { Card } from "react-bootstrap";
import "./Dictionary.css";
import { LeftContent } from './LeftContent';
import { Meaning } from './Meaning';
import { RightContent } from './RightContent';

export const Dictionary = () => {
    return (
        <div>

            <Card className="Dec">
                <h4>Dictionary</h4>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eos impedit dicta debitis cupiditate molestias vitae amet distinctio dolores, magnam inventore adipisci omnis? Non harum ut voluptate delectus consequuntur laudantium!</span>
            </Card>
            <LeftContent />
            <RightContent />
            <Meaning />
        </div>
    );
};
