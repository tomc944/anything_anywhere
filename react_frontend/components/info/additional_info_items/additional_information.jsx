var React = require('react');

var AdditionalInformation = React.createClass({
  openTyeArticle: function() {
    this.props.history.pushState(null, 'additional_information/tye');
  },

  openVarieties: function() {
    this.props.history.pushState(null, "additional_information/varieties");
  },

  openFinnist: function() {
    this.props.history.pushState(null, "additional_information/finnist");
  },

  openCollecting: function() {
    this.props.history.pushState(null, "additional_information/collecting");
  },

  openAbbrev: function() {
    this.props.history.pushState(null, "additional_information/abbrev");
  },

  openA2Z: function() {
    this.props.history.pushState(null, 'additional_information/a2z');
  },

  openSecurity: function() {
    this.props.history.pushState(null, 'additional_information/security')
  },


  render: function() {
    <div className="additional-information-container">
      <div className="additional-information">
        <h1>This sector will have text files of info concerning the kinds of things I sell, and eventually links to further sources</h1>
          <li> <a className="additional-information-link" onClick={this.openTyeArticle}> Articles by Robert Tye, in my opinion perhaps the most cogent (and maverick) thinker in historical economics alive today </a></li>
          <li> <a className="additional-information-link" onClick={this.openVarieties}> COIN VARIETIES: large & small dates, etc. </a></li>
          <li> <a className="additional-information-link" onClick={this.openFinnist}> INTRODUCTION TO FISCAL INSTRUMENTS </a></li>
          <li> <a className="additional-information-link" onClick={this.openCollecting}> INTRODUCTION TO COLLECTING </a></li>
          <li> <a className="additional-information-link" onClick={this.openAbbrev}> Abbreviations found on British military medals, by R.A. Fikentscher </a></li>
          // Might leave the below <li> out due to deprecated sales
          <li>MEXICO, varieties of Sonoran revolutionary 5 and 10 pesos </li>
          <li> <a className="additional-information-link" onClick={this.openA2Z} >A to Z articles I've written for World Coin News </a></li>
          // For later, don't know how to pop-up email client correctly
          <li>Click here to get on the mailing list for monthly new offers (usually about 1000 new items) just write "anythinganywhere" in message box.  Paper version available by subscription.  Ask for rates. </li>
          <li> <a className="additional-information-link" onClick={this.openSecurity}> Click here for a disquisition on "secure" commerce. </a></li>
          // Need to look how to route this one...
          <li>Click here for a discussion of shipping costs, guarantees, refunds, etc. </li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for list of abbreviations I like to use. </a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for grading policy </a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for consignment and website listing terms </a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for description of attribution, authentication, grading, and appraisal services </a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for to see what I want to buy (changes from time to time)</a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for my opinion on internet security</a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Click here for website development and management information</a> </li>
          <li> <a className="additional-information-link" onClick={this.open}> Introduction to faleristics (badges) </a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Coin Cleaning Secrets of the Ancients</a></li>
          <li> <a className="additional-information-link" onClick={this.open}> Personal opinions regarding the collection of phonecards, etc. </a> </li>
          <li> <a className="additional-information-link" onClick={this.open}> FRAUD ALERTS - deadbeats & scammers </a></li>

        {this.props.children}
      </div>
    </div>
  }
})

module.exports = AdditionalInformation
