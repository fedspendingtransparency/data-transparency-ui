/**
 * GoToPage.jsx
 * Created by Alisa Burdeyny 12/5/19
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    changePage: PropTypes.func.isRequired,
    totalPages: PropTypes.number
};

const defaultProps = {
    totalPages: 1
};

export default class GoToPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goToPage: ''
        };

        this.changePage = this.changePage.bind(this);
        this.changedInput = this.changedInput.bind(this);
        this.validPage = this.validPage.bind(this);
    }

    changePage(e) {
        e.preventDefault();
        if (this.validPage()) {
            this.props.changePage(parseInt(this.state.goToPage, 10));
        }
    }

    changedInput(e) {
        this.setState({
            goToPage: e.target.value
        });
    }

    validPage() {
        const { goToPage } = this.state;
        const { totalPages } = this.props;
        return !(goToPage === '' || parseInt(goToPage, 10) < 1
            || parseInt(goToPage, 10) > totalPages);
    }

    render() {
        const { totalPages } = this.props;
        const placeholder = totalPages > 1 ? `1-${totalPages}` : '1';
        return (
            <form className="pagination__go-to">
                <label htmlFor="pagination-go-to">
                    Go to page
                </label>
                <input
                    type="number"
                    id="pagination-go-to"
                    title={`Enter a number between 1 and ${totalPages}`}
                    min="1"
                    max={totalPages}
                    placeholder={placeholder}
                    value={this.state.goToPage}
                    onChange={this.changedInput}
                    onSubmit={this.changePage} />
                <button
                    type="submit"
                    onClick={this.changePage}
                    disabled={!this.validPage()}>
                    Go
                </button>
            </form>
        );
    }
}

GoToPage.propTypes = propTypes;
GoToPage.defaultProps = defaultProps;
