import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '25%',
    margin: 10,
    width: 300,
    height: 230,
  },

  title: {
    marginBottom: 16,
    fontSize: 20,
  },

  textSecondary: {
    fontSize: 16,
  },

  avatar: {
    marginBottom: 10,
  },
};

const ResultsGridItem = ({ repo, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Avatar
        className={classes.avatar}
        src={repo.owner.avatar_url}
        alt={`Avatar for ${repo.name}`}
      />

      <Typography className={classes.title} color="primary">
        Owner: {repo.owner.login}
      </Typography>

      <Typography className={classes.textSecondary}>
        Stars: {repo.stargazers_count}
      </Typography>

      <Typography className={classes.textSecondary}>
        Forked: {repo.forks_count} times
      </Typography>

      <Typography className={classes.textSecondary}>
        Open Issues: {repo.open_issues_count}
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(ResultsGridItem);