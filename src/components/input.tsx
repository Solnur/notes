import React from 'react';
import TextField from '@material-ui/core/TextField';

type Props = {
    ref?: any;
    label: string;
    type: string;
    required?: boolean,
    styles?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC <Props> = props => {
    return (
        <div className={props.styles}>
            <TextField
                fullWidth={true}
                variant="outlined"
                label={props.label}
                onChange={props.onChange}
                margin="normal"
                type={props.type}
                required={props.required}
                inputProps={
                    {maxLength: 30}
                }
            />
        </div>
    );
};
