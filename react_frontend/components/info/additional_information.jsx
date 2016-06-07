var React = require('react');

var AdditionalInformation = React.createClass({
                // Might leave the below <li> out due to deprecated sales
                // For later, don't know how to pop-up email client correctly
                // Need to look how to route this one...
  render: function() {
    <div className="coin-information-container">
      <div className="coin-information">
        <h1>This sector will have text files of info concerning the kinds of things I sell, and eventually links to further sources</h1>
          <ul>
            <li> <a href="http://anythinganywhere.com/additional_information/tye/"> Articles by Robert Tye, in my opinion perhaps the most cogent (and maverick) thinker in historical economics alive today </a></li>
              <li> <a href="http://anythinganywhere.com/additional_information/varieties"> COIN VARIETIES: large & small dates, etc. </a></li>
              <li> <a href="http://anythinganywhere.com/additional_information/fininst"> INTRODUCTION TO FISCAL INSTRUMENTS </a></li>
              <li> <a href="http://anythinganywhere.com/additional_information/collecting"> INTRODUCTION TO COLLECTING </a></li>
              <li> <a href="http://anythinganywhere.com/additional_information/britabbrev"> Abbreviations found on British military medals, by R.A. Fikentscher </a></li>

                <li>MEXICO, varieties of Sonoran revolutionary 5 and 10 pesos </li>
                <li> <a href="http://anythinganywhere.com/additional_information/a2z">"A to Z" articles I&#39;ve written for World Coin News </a></li>

                <li>Click here to get on the mailing list for monthly new offers (usually about 1000 new items) just write "anythinganywhere" in message box.  Paper version available by subscription.  Ask for rates. </li>
                <li> <a href="http://anythinganywhere.com/additional_information/security"> Click here for a disquisition on "secure" commerce. </a></li>

                <li>Click here for a discussion of shipping costs, guarantees, refunds, etc. </li>
                <li> <a href="http://anythinganywhere.com/additional_information/abbrev"> Click here for list of abbreviations I like to use. </a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/grading"> Click here for grading policy </a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/sonsign"> Click here for consignment and website listing terms </a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/apprais"> Click here for description of attribution, authentication, grading, and appraisal services </a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/buying"> Click here for to see what I want to buy (changes from time to time)</a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/privacy"> Click here for my opinion on internet security</a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/websiteman"> Click here for website development and management information</a> </li>
                <li> <a href="http://anythinganywhere.com/additional_information/faleri"> Introduction to faleristics (badges) </a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/clean"> Coin Cleaning Secrets of the Ancients</a></li>
                <li> <a href="http://anythinganywhere.com/additional_information/plasticmon"> Personal opinions regarding the collection of phonecards, etc. </a> </li>
                <li> <a href="http://anythinganywhere.com/additional_information/jerks"> FRAUD ALERTS - deadbeats & scammers </a></li>
          </ul>

        {this.props.children}
      </div>
    </div>
  }
})

module.exports = AdditionalInformation
