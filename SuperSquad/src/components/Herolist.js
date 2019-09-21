import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions';
import '../styles/index.css'

class Herolist extends Component {
    render(){
        console.log('props from the store', this.props)
        return( 
            <div>
                {this.props.heroes.length > 0 ?
                <div>
                    <h4>Your Hero Squad</h4>
                    <ul className="list-group">
                        {
                            this.props.heroes.map((hero) => {
                                return(
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">
                                        {hero.name}
                                    </div>
                                    <div className="list-item right-btn" onClick={() => this.props.removeCharacterById(hero.id)}>
                                        x
                                    </div>
                                </li> )
                            })
                        }
                    </ul>
                </div> : null }
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        'heroes': state.heroes
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCharacterById}, dispatch);
}

export default connect(mapStateToProps, {removeCharacterById} )(Herolist);
