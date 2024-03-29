import React, { Component } from 'react';
import './FeatureBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class FeatureBox extends Component {

    render() {

        return(
            <div className="featureBox" style={{backgroundColor: this.props.color}}>
                <div className="tips-box" >
                    <div className="tip" >
                        <div>
                            <FontAwesomeIcon icon={this.props.smallGraphic} size="2x"/>
                        </div>
                        <div>
                            <div className="tip-text">{this.props.tipText}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
