import React, { Component } from 'react';

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
        if (!this.state.isError) {
            return (
                <div className="error-block">
                    <div className="container">
                        <p className="error-block__info bigger-text">Something went wrong, but we will do our best to fix that as soon as possible</p>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
};

export default ErrorBoundary;
