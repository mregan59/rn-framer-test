import * as React from 'react';
import {
    Button as UIButton,
    ButtonProps,
} from '@ui-kitten/components';

export const Button = (props: ButtonProps) => {
    return (
        <UIButton {...props}>{props.children}</UIButton>
    );
};
