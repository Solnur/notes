import React from 'react';
import Button from '@material-ui/core/Button';

type Props = {
    variant?: string | any;
    title: string;
    styles?: string;
    onClick?: Function | any;
}

export const MyButton: React.FC<Props> = props => {
    return (
        <div className={props.styles}>
            <Button variant={props.variant}
                    color="primary"
                    fullWidth={true}
                    onClick={props.onClick}>{props.title}</Button>
        </div>
    );
};
