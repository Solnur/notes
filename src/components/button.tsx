import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    variant?: any;
    title: string;
    styles?: string;
};

export const MyButton: React.FC<Props> = props => {
    return (
        <div className={props.styles}>
            <Button variant={props.variant} color="primary" fullWidth={true}>{props.title}</Button>
        </div>
    );
};
