import {
  Card, CardActions, CardHeader, CardText
} from 'material-ui/Card';
import React, { Component } from 'react';
import {
  selectedBody, selectedEmail, selectedHash, selectedMd5, selectedName,
  selectedSubject, selectedTimeFormat, selectedTimeHuman
} from '~/src/app/selectors/index';
import FlatButton from 'material-ui/FlatButton';
import GithubIcon from '~/src/app/components/icons/GithubIcon';
import { ImageRemoveRedEye } from 'material-ui/svg-icons';
import RawgitIcon from '~/src/app/components/icons/RawgitIcon';
import WaybackIcon from '~/src/app/components/icons/WaybackIcon';
import { connect } from 'react-redux';
import packageInfo from '~/package.json';
import { push } from 'react-router-redux';

const githubCommitUrl = 'https://github.com/WebAudio/web-audio-api/commit/';

class CommitPanel extends Component {
  render() {
    const {
      dispatch, hash, name, email, subject, body, md5, timeHuman, timeFormat
    } = this.props;
    const subtitle = (
      <span>
        <strong>{name}</strong>
        &nbsp;committed&nbsp;
        <strong>{timeHuman}</strong>
      </span>
    );
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
            <dd>{timeFormat} <small>({timeHuman})</small></dd>

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
            linkButton={true}
          />
          <FlatButton label="Snapshot"
            href={`/${packageInfo.name}/view`}
            linkButton={true}
            onTouchTap={(e) => dispatch(push(e.currentTarget.href))}
            icon={<ImageRemoveRedEye />}
          />
          <FlatButton label="Rawgit"
            href={`/${packageInfo.name}/view/rawgit`}
            linkButton={true}
            onTouchTap={(e) => dispatch(push(e.currentTarget.href))}
            icon={<RawgitIcon />}
          />
          <FlatButton label="Wayback"
            href={`/${packageInfo.name}/view/wayback`}
            linkButton={true}
            onTouchTap={(e) => dispatch(push(e.currentTarget.href))}
            icon={<WaybackIcon />}
          />
        </CardActions>
      </Card>
    );
  }
}

export default connect((state) => {
  return {
    hash: selectedHash(state),
    name: selectedName(state),
    email: selectedEmail(state),
    subject: selectedSubject(state),
    body: selectedBody(state),
    md5: selectedMd5(state),
    timeFormat: selectedTimeFormat(state),
    timeHuman: selectedTimeHuman(state)
  };
})(CommitPanel);
