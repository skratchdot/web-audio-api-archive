import {
  Card, CardActions, CardHeader, CardText
} from 'material-ui/Card';
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import GithubIcon from '~/src/app/components/icons/GithubIcon';
import { ImageRemoveRedEye } from 'material-ui/svg-icons';
import RawgitIcon from '~/src/app/components/icons/RawgitIcon';
import WaybackIcon from '~/src/app/components/icons/WaybackIcon';
import { connect } from 'react-redux';
import moment from 'moment';
import packageInfo from '~/package.json';
import { push } from 'react-router-redux';

const githubCommitUrl = 'https://github.com/WebAudio/web-audio-api/commit/';

class CommitPanel extends Component {
  render() {
    const { dispatch, selectedCommit } = this.props;
    const time = selectedCommit.get('time');
    const timeMs = time * 1000;
    const timeMoment = moment(timeMs);
    const timeFormatted = timeMoment.format('dddd, MMMM Do YYYY, h:mm:ss a');
    const timeHuman = timeMoment.fromNow();
    const hash = selectedCommit.get('hash');
    const name = selectedCommit.get('name');
    const email = selectedCommit.get('email');
    const subject = selectedCommit.get('subject');
    const body = selectedCommit.get('body');
    const md5 = selectedCommit.get('md5');
    const subtitle = (
      <span>
        <strong>{name}</strong>
        &nbsp;committed&nbsp;
        <strong>{timeHuman}</strong>
      </span>
    );
    const goto = (path) => {
      return () => dispatch(push(`/${packageInfo.name}${path}`));
    };
    return (
      <Card>
        <CardHeader
          title={subject}
          subtitle={subtitle}
          avatar={`https://www.gravatar.com/avatar/${md5}`}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <dl>
            <dt><strong>Committer:</strong></dt>
            <dd>{name} <small>&lt;{email}&gt;</small></dd>

            <dt><strong>Date:</strong></dt>
            <dd>{timeFormatted} <small>({timeHuman})</small></dd>

            <dt><strong>Subject:</strong></dt>
            <dd>{subject}</dd>

            <dt><strong>Body:</strong></dt>
            <dd>{body}</dd>
          </dl>
        </CardText>
        <CardActions>
          <FlatButton label="Commit"
            icon={<GithubIcon />}
            href={`${githubCommitUrl}${hash}`}
            linkButton={true} />
          <FlatButton label="Archive"
            icon={<ImageRemoveRedEye />} onTouchTap={goto('/view/')} />
          <FlatButton label="Rawgit"
            icon={<RawgitIcon />} onTouchTap={goto('/view/rawgit')} />
          <FlatButton label="Wayback"
            icon={<WaybackIcon />} onTouchTap={goto('/view/wayback')} />
        </CardActions>
      </Card>
    );
  }
}

export default connect((state) => {
  return {
    selectedCommit: state.selectedCommit
  };
})(CommitPanel);
