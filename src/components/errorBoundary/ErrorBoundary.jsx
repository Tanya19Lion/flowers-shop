import React, { Component } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
    state = {
        isError: false
    };

    componentDidCatch() {
        this.setState({
            isError: true
        });
    }

    render() {
        if (this.state.isError) {
            return <ErrorMessage />;
        }

        return this.props.children;
    }
};

export default ErrorBoundary;
