import React, {Component} from 'react';
import sample from '../data/multi-search.json';
import '../stylesheets/main.css';

class MultiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            country: '',
            capital: '',
            region: '',
            subregion: '',
        }

        this.handleCountrySearch = this.handleCountrySearch.bind(this);
        this.hanldeCapitalSearch = this.hanldeCapitalSearch.bind(this);
        this.hanldeRegionSearch = this.hanldeRegionSearch.bind(this);
        this.hanldeSubRegionSearch = this.hanldeSubRegionSearch.bind(this);
    }

    componentDidMount() {
        this.setState({data: sample})
    }

    handleCountrySearch(e) {
        this.setState({country: e.target.value});
    }

    hanldeCapitalSearch(e) {
        this.setState({capital: e.target.value});
    }

    hanldeRegionSearch(e) {
        this.setState({region: e.target.value});
    }

    hanldeSubRegionSearch(e) {
        this.setState({subregion: e.target.value});
    }

    render() {
        return (
            <div>
                <h1 className="title">Country/Capital Data Multi-Search Service</h1>
                <div className="buttons">
                    <input type="text" onChange={this.handleCountrySearch} placeholder="Filter by Country" />
                    <input type="text" onChange={this.hanldeCapitalSearch} placeholder="Filter by Capital" />
                    <input type="text" onChange={this.hanldeRegionSearch} placeholder="Filter by Region" />
                    <input type="text" onChange={this.hanldeSubRegionSearch} placeholder="Filter by Subregion" />
                </div>
                <RenderList 
                    data={this.state.data}
                    country={this.state.country}
                    capital={this.state.capital}
                    region={this.state.region}
                    subregion={this.state.subregion} />
            </div>    
        );
    }
}

class RenderList extends Component {
    render() {
        let data = this.props.data;
        let country = this.props.country;
        let capital = this.props.capital;
        let region = this.props.region;
        let subregion = this.props.subregion;

        if (country.length > 0) {
            data = data.filter(function(item) {
                return item.country.toLowerCase().match(country);            
            });
        }

        if (capital.length > 0) {
            data = data.filter(function(item) {
                return item.capital.toLowerCase().match(capital);            
            });
        }
        
        if (region.length > 0) {
            data = data.filter(function(item) {
                return item.region.toLowerCase().match(region);            
            });
        } 

        if (subregion.length > 0) {
            data = data.filter(function(item) {
                return item.subregion.toLowerCase().match(subregion);            
            });
        }
        
        let list = data.map((entry, index) => {
            return (
                <tr key={index}>
                    <td className="country">{entry.country.substr(0,30)}</td>
                    <td className="capital">{entry.capital}</td>
                    <td className="region">{entry.region}</td>
                    <td className="subregion">{entry.subregion}</td>
                    <td className="lat">{parseFloat(entry.latlng[0]).toFixed(2)}</td>
                    <td className="lon">{parseFloat(entry.latlng[1]).toFixed(2)}</td>
                </tr>
            );
        });

        return (
            <table>
                <tbody>
                    <tr className="tableHead">
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Region</th>
                    <th>Subregion</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    </tr>
                    {list}
                </tbody>
            </table>
        );
    }
}

export default MultiSearch;