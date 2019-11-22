import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Input: React.FC = () => {
    return (
        <>
            <TextField
                id="outlined-name"
                label="Username or email"
                margin="normal"
                variant="outlined"
                type="email"
                name="email"
                autoComplete="email"
                required={true}
            />
        </>
    );
};
