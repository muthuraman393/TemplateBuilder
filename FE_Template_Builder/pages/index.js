import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { SettingsPanel } from '../components/SettingsPanel';
import { Toolbox } from '../components/Toolbox';
import { Topbar } from '../components/Topbar';
import { Button } from '../components/user/Button';
import { Card, CardBottom, CardTop } from '../components/user/Card';
import { Container } from '../components/user/Container';
import { PageComponent } from '../components/user/PageComponent';
import { Text } from '../components/user/Text';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div style={{ margin: '0 auto', width: '1080px' }}>
      <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
        FE Template Builder
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          PageComponent,
          CardTop,
          CardBottom,
        }}
      >
        <Topbar />
       <Grid container spacing={5} style={{ paddingTop: '10px' }}>
       <Grid item xs={3}>
            <Paper className={classes.root}>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        <Grid item xs>
            <Frame>
                <Element
                canvas
                is={Container}
                padding={35}
                background="#eeeeee"
                data-cy="root-container"
              >
                {/* <Card data-cy="frame-card" />
                <Button text="Click me" size="small" data-cy="frame-button" />
                <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
                <Element
                  canvas
                  is={Container}
                  padding={6}
                  background="#999999"
                  data-cy="frame-container"
                >
                  <Text
                    size="small"
                    text="It's me again!"
                    data-cy="frame-container-text"
                  />
      </Element>*/}
                <Element
                  canvas
                  is={PageComponent}
                  padding={"50px 20px"}
                  height={1000}
                  background="#fff"
                  data-cy="frame-container"
                ></Element>
              </Element>
            </Frame>
          </Grid>

      </Grid>
      </Editor>
    </div>
  );
}
