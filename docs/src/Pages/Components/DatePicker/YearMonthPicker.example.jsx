import React, { Fragment, PureComponent } from 'react';
import { DatePicker } from 'material-ui-pickers';

export default class YearMonthPicker extends PureComponent {
  state = {
    selectedDate: '2018-04-01T00:00:00.000Z',
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DatePicker
            year
            label="Year only"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling
          />
        </div>

        <div className="picker">
          <DatePicker
            month
            label="Year and Month"
            helperText="With min and max"
            minDate="2018-03-01"
            maxDate="2018-06-01"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling
          />
        </div>

        <div className="picker">
          <DatePicker
            month
            openTo="year"
            label="Year and Month"
            helperText="Start from year selection"
            value={selectedDate}
            onChange={this.handleDateChange}
            animateYearScrolling
          />
        </div>
      </Fragment>
    );
  }
}
