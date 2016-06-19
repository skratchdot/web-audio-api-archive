import {
  Card, CardActions, CardHeader, CardText, CardTitle
} from 'material-ui/Card';
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';

class CommitPanel extends Component {
  render() {
    return (
      <Card expanded={true}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"
          actAsExpander={false}
          showExpandableButton={false}
        />
        <CardTitle
          title="Card title"
          subtitle="Card subtitle"
        />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={() => alert('1')} />
          <FlatButton label="Reduce" onTouchTap={() => alert('1')} />
        </CardActions>
      </Card>
    );
  }
}

export default connect()(CommitPanel);
