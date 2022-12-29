import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

class ActivityRow extends React.Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {

    }

    render() {
        let { data } = this.state;

        return (
            <></>
        )
    }
}

export default withTranslation('translations')(ActivityRow);