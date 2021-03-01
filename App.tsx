import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Datepicker, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme/dark-theme.json'; // <-- Import app theme
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export default () => (
    <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button>HOME</Button>
                <Datepicker></Datepicker>
            </Layout>
        </ApplicationProvider>
    </>
);