import { useNode } from '@craftjs/core';
import { Slider } from '@material-ui/core';
import { Paper, FormControl, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import React from 'react';

export const PageComponent = ({ background, padding,height, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      {...props}
      ref={(ref) => connect(drag(ref))}
      style={{ margin: '35px 0', background, padding: `${padding}`, height: `${height}px` }}
    >
      {children}
    </Paper>
  );
};

export const PageComponentSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          name="background-color"
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color), 500);
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) =>
            setProp((props) => (props.padding = value), 500)
          }
        />
      </FormControl>
    </div>
  );
};

export const PageComponentDefaultProps = {
  background: '#ffffff',
  padding: 3,
};

PageComponent.craft = {
  props: PageComponentDefaultProps,
  related: {
    settings: PageComponentSettings,
  },
};
