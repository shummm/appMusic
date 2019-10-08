import React, {Component} from 'react';
import AppListItem from '../app-list-item';
import { connect } from 'react-redux';
import withAppstoreService from '../hoc';
import { appsLoaded } from '../../actions';
import { compose } from '../../utils';
import './app-list.css';

class AppList extends Component {

  componentDidMount() {
    const { appstoreService } = this.props;
    const data = appstoreService.getData();

    this.props.appsLoaded(data)
   }

  render() {
    const {apps} = this.props;

    return (
      <ul>
        {
          apps.map((app) => {
            return (
              <li key={app.id}>
                <AppListItem app={app} />
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ apps }) => {
  return { apps };
};

const mapDispatchToProps = {
  appsLoaded
};

export default compose(
  withAppstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppList)
