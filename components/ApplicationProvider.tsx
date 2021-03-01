import * as React from 'react';
import * as eva from '@eva-design/eva';
import {
    ApplicationProvider as UIApplicationProvider,
    ApplicationProviderProps,
    IconRegistry
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export const ApplicationProvider = (props: ApplicationProviderProps) => {
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack} />
            <UIApplicationProvider {...eva} theme={eva.dark}>
                {props.children}
            </UIApplicationProvider>
        </React.Fragment>
    );
};
