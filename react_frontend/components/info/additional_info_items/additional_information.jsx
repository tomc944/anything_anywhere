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
    this.props.history.pushState(null, 'additional_information/security');
  },

  openAbbrev: function() {
    this.props.history.pushState(null, 'additional_information/abbrev');
  },

  openGrading: function() {
    this.props.history.pushState(null, 'additional_information/grading');
  },

  openSonSign: function() {
    this.props.history.pushState(null, 'additional_information/sonsign');
  },

  openApprais: function() {
    this.props.history.pushState(null, 'additional_information/apprais');
  },

  openBuying: function() {
    this.props.history.pushState(null, 'additional_information/buying');
  },

  openPrivacy: function() {
    this.props.history.pushState(null, 'additional_information/privacy');
  },

  openWebsiteMan: function() {
    this.props.history.pushState(null, 'additional_information/websiteman');
  },

  openFaleri: function() {
    this.props.history.pushState(null, 'additional_information/faleri');
  },

  openClean: function() {
    this.props.history.pushState(null, 'additional_information/clean');
  },

  openCollecting: function() {
    this.props.history.pushState(null, 'additional_information/collecting')
  },

  openJerks: function() {
    this.props.history.pushState(null, 'additional_information/jerks')
  },

  // Might leave the below <li> out due to deprecated sales
  // For later, don't know how to pop-up email client correctly
  // Need to look how to route this one...
  render: function() {

    return (
      <div>
        <div className="additional-information-links">
          <h1>This sector will have text files of info concerning the kinds of things I sell, and eventually links to further sources</h1>

          <div> <a className="additional-information-link" onClick={this.openTyeArticle}> Articles by Robert Tye, in my opinion perhaps the most cogent (and maverick) thinker in historical economics alive today </a></div>
          <div> <a className="additional-information-link" onClick={this.openVarieties}> COIN VARIETIES: large & small dates, etc. </a></div>
          <div> <a className="additional-information-link" onClick={this.openFinnist}> INTRODUCTION TO FISCAL INSTRUMENTS </a></div>
          <div> <a className="additional-information-link" onClick={this.openCollecting}> INTRODUCTION TO COLLECTING </a></div>
          <div> <a className="additional-information-link" onClick={this.openAbbrev}> Abbreviations found on British military medals, by R.A. Fikentscher </a></div>

          <div>MEXICO, varieties of Sonoran revolutionary 5 and 10 pesos </div>
          <div> <a className="additional-information-link" onClick={this.openA2Z} >A to Z articles I've written for World Coin News </a></div>

          <div>Click here to get on the mailing list for monthly new offers (usually about 1000 new items) just write "anythinganywhere" in message box.  Paper version available by subscription.  Ask for rates. </div>
          <div> <a className="additional-information-link" onClick={this.openSecurity}> Click here for a disquisition on "secure" commerce. </a></div>

          <div>Click here for a discussion of shipping costs, guarantees, refunds, etc. </div>
          <div> <a className="additional-information-link" onClick={this.openAbbrev}> Click here for list of abbreviations I like to use. </a></div>
          <div> <a className="additional-information-link" onClick={this.openGrading}> Click here for grading policy </a></div>
          <div> <a className="additional-information-link" onClick={this.openSonSign}> Click here for consignment and website listing terms </a></div>
          <div> <a className="additional-information-link" onClick={this.openApprais}> Click here for description of attribution, authentication, grading, and appraisal services </a></div>
          <div> <a className="additional-information-link" onClick={this.openBuying}> Click here for to see what I want to buy (changes from time to time)</a></div>
          <div> <a className="additional-information-link" onClick={this.openPrivacy}> Click here for my opinion on internet security</a></div>
          <div> <a className="additional-information-link" onClick={this.openWebsiteMan}> Click here for website development and management information</a> </div>
          <div> <a className="additional-information-link" onClick={this.openFaleri}> Introduction to faleristics (badges) </a></div>
          <div> <a className="additional-information-link" onClick={this.openClean}> Coin Cleaning Secrets of the Ancients</a></div>
          <div> <a className="additional-information-link" onClick={this.openCollecting}> Personal opinions regarding the collection of phonecards, etc. </a> </div>
          <div> <a className="additional-information-link" onClick={this.openJerks}> FRAUD ALERTS - deadbeats & scammers </a></div>

          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = AdditionalInformation
