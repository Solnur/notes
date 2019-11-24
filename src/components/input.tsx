import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
    label: string;
    type: string;
    styles?: string;
}

export const Input: React.FC <Props> = props => {
    return (
        <div className={props.styles}>
            <TextField
                label={props.label}
                margin="normal"
                variant="outlined"
                type={props.type}
                autoComplete="email"
                required={true}
                fullWidth={true}
            />
        </div>
    );
};
