import { useEditor } from '@craftjs/core';
import {
  Box,
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
} from '@material-ui/core';
import React from 'react';

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;
    console.log(state.nodes,'state.nodes');
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        displayName: state.nodes[currentNodeId].data.displayName,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && selected ? (
    <Box bgcolor="rgba(226, 26, 185, 0.06)" mt={2} px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="subtitle1">Selected</Typography>
              </Grid>
              <Grid item>
                <Chip
                  size="small"
                  color="primary"
                  label={selected.displayName}
                  data-cy="chip-selected"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <MaterialButton
            variant="contained"
            color="default"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </MaterialButton>
        ) : null}
      </Grid>
    </Box>
  ) : null;
};
