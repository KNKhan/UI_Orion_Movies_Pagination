import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    constructor (props) {
        super(props);
    }

    onFieldChange(event) {
        const fieldValue = event.target.value;
        this.props.onChange(fieldValue);
    }

    render () {
        return <form className='search'>
          <input type="text" name="jobNumber" onKeyUp={this.onFieldChange.bind(this)} />
        </form>
    }
}
export default Search;