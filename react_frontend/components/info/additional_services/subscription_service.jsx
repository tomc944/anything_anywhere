var React = require('react');

var SubscriptionService = React.createClass({
  render: function() {
    return (
      <div className="subscription-service-container">
        <div className="subscription-service">
          <h2>SUBSCRIPTION SERVICE</h2>
          <h4>This was posted on 10/12/2006.</h4>

          <p>I&#39;ve been working on this for a couple of years.  Another way for me to utilize my decades of messing around with coins.  I want you to join my club for $25.00 per year.  Your subscription will get you access to the following services:</p>
          <br/>

          <p>1. Market research - I&#39;ll find out what I think about the deal you are about to do and will give you my opinion.  Priced as follows: $5 per day for first 3 items researched, $5 per item thereafter.</p>
          <br/>
          <p>2. Search service.  Per item: $5.00 for a web search up to 10 minutes, $10 for extended web search, $20 for up to 10 emails or phone calls, $1.50 per thereafter.  (because the longer I take doing this kind of thing the less likely it is findable).</p>
          <br/>
          <p>3. Attributions, grading, authentication at half price: that is $1.25, $2.50, $2.50 respectively.</p>
          <br/>
          <p>4. At some point there will be a large numismatic database on line supported by a self-improving search function.  There will be basic and enhanced access.  You will have enhanced access, whatever that will turn out to mean, but it will be tasty.</p>
          <br/>

          <p>As always with everything I try to do, satisfaction is guaranteed.</p>
          <br/>

          <p>Come one, come all.  Send me your dues payment today.  Paypal or credit card.  Email me - reisbiz@earthlink.net to get started.</p>
          <br/>
        </div>
      </div>
    );
  }

});

module.exports = SubscriptionService;
