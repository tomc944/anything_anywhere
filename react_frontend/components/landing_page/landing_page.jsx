var React = require('react'),
    LandingPageNewArrivals = require('./landing_page_new_arrivals');

    var sample = [];

    for (var i = 0; i < 20; i++) {
      sample.push({name: "i am a test arrival"});
    }

var LandingPage = React.createClass({
  getInitialState: function() {
    return ({ newArrivals: sample });
  },

  componentDidMount: function() {
    // get new Arrivals
  },

  render: function() {
    var newArrivals = this.state.newArrivals.map(function(product, index) {
      return <LandingPageNewArrivals landing_page_info={product} key={index}/>;
    });

    console.log(newArrivals);

    return (
      <div className="landing-page">

        <div id="landing-page-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#landing-page-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#landing-page-carousel" data-slide-to="1"></li>
            <li data-target="#landing-page-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img data-src="..." alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img data-src="..." alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img data-src="..." alt="Third slide"/>
            </div>
          </div>
          <a className="left carousel-control" href="#landing-page-carousel" role="button" data-slide="prev">
            <span className="icon-prev" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#landing-page-carousel" role="button" data-slide="next">
            <span className="icon-next" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="landing-page-info">
          <h3>Trading in numismatics, etc. and dribbles of discourse.</h3>
          <h3><b>No cookies set. No data copied.</b> All business by email: <a href="mailto:reisbiz@earthlink.net"><b>reisbiz@earthlink.net.</b></a></h3>
          <h3>Everything in this business is done by <b>humans.</b></h3>
          <h3><b>Satisfaction guaranteed.</b></h3>
          <h3>I can read your emails in French, Spanish, Italian, etc. & German.</h3>
          <h3>I won&#39;t take advantage of your ignorance.</h3>
          <h3>We&#39;ll keep working on it until everyone is <b>happy</b> (or, more exactly, given the general situation, not unhappy).</h3>
        </div>

        <h3 className="landing-page-title">NEW ARRIVALS</h3>

        <div className="landing-page-new-arrivals container-fluid">
          <div className="row">
            {newArrivals}
          </div>
        </div>

        <div className="landing-page-opinions container-fluid">
          <h3 className="landing-page-title">THOUGHTS & OPINIONS</h3>

            BUSINESS:

    6/2/08 - because of the unusual situations with both the bullion markets and the USA dollar exchange rate everything (11/16/2008) you should consider ALL of my posted prices to be provisional.  There may be changes in any category.  This notice will be posted on a few other pages but not all.  But this is your official notice. (Renewed 1/4/2010 - this is what low level chaos feels like.)  (6/8/2010 chaos continues to build.  Think before you act.  Think before you think.  Observe before that.  Remember to breathe.) 10/21/2010 so here we are living history.  How long has this crisis been going on?  3 years?  11?  40?  65?
    This aviso renewed again 4/10/2011.  It hasn't been this eventful since the 60s.  And again 10/6/2011.  5 years of financial crisis.
    And again 2/26/2012.  And of course 8/3/2012.  May 26 2013: gold & silver were up, now they're down, there are still prices in my coins inventories that are too low, but probably also some that are too high.  I update this notice occasionally, and do so again 7/4/2014.  Over time the situation remains volatile.  At the moment raw numbers are down.
    4/29/2016 So we see we have been living in an unsettled situation for over 15 years now.  Interesting times.

            IN GENERAL:
            Thanks for any comments and I will post them if you want me to.  I don’t write to convince anyone of anything.  I write for 3 reasons: 1) to figure out what I actually do think, 2) to see what the responses (if any) are, 3) to demonstrate the uses of the first amendment of the USA constitution.  I think the first amendment is possibly the most important contribution to human affairs of the entire American venture.

            4/29/2016
1. POSTAL RATES have changed.  Big jump in international, domestic not so bad.  For domestic shipping either priority or first class is still the best bet for getting stuff delivered quickly.  In this business so far no one is offering free shipping programs like Amazon, whose free shipping program is really a pre-paid shipping program.  But you who have been working with me for a while know that I often partially subsidize the shipping & occasionally give a freebie.  When I feel like it.
2. LOSSES IN TRANSIT - client in one country reports that 2 sendings in succession did not arrive.  That appears to be a problem.  Something will have to be done.  Another kind of problem is I sold some of those fragile spade coins last list & a customer reported arrived broken.  I doubt it, I knew they were fragile & packed them accordingly, but my policy is everyone gets one chance.  This other guy in Singapore though, claimed it never arrived, forced a paypal refund, then the box came back opened, the spade removed from its protection, broken, thrown back in the box, PO sticker RETURN TO SENDER.  He's not my customer any more, though he has not been so notified.  Want to see if he tries to order something again.  Eventually I'll out him to the world as a turtle egg.
   But seriously, if you want guaranteed, full indemnity, fully insured international shipment the paperwork will have to be perfect and if will cost real money.
3. HAD ENOUGH OF BAD TASTING POLITICS YET?  Do yourself a favor, check out your local candidates: the real estate sharks, hired guns, clueless egotists, blank screen stuffed shirts, deluded ideologues, monomaniacs, maybe there's a good one in that ballot somewhere, but how will you know if you don't do your own research?  I was talking with a local guy who had been a judge, we elect em here.  "I did traffic all day long, maybe a bit of burglary & so forth.  What difference does my opinion of abortion make to my job?  But that's all anyone ever asked me when I was campaigning."
2. AND MY WIFE is beginning to see that having different names on different legal documents is getting to be more of an issue these days.  Straightening that out sooner rather than later is probably a good idea.  Just saying.

1/29/2016
1. SHAKEOUT IN THE BUSINESS?  I pay more attention to the Asian coin market than to the USA/Europe sector.  There is a general "settling" of price levels in Chinese stuff, except at the top of course, which I don't work in.  I've seen interesting stuff come on the market as upper-middle class collectors can't afford their kids' tuition & have too dump some of their goodies at a loss.  The Chinese market has not "broken" however.  Neither has the Indian market, though probably all of the lemming collector sector has disappeared.  All in all an OK situation for business & pleasure, assuming you have some disposable income, which, generally, fewer people do than, say, 10 years ago.  And I can't say I've run into any "young numismatists" here where I live, though there are plenty living in other countries.
2. LOSSES IN TRANSIT last year were approximately at the same rate as usual: about 4 per 1000 packages, evenly split between USA and non-USA addresses.  Locations seem random.  No trends have become obvious.
3. 1. ALL OF THE FALSE STUFF being thrown at Hillary does not stick & will not stop her from winning if that is what she does.  The problem with the wrongwing is that they don't care whether something is true or not, they just like to throw stuff.  If they want to stop Hillary they need facts.  Shouldn't be too hard to find.  Unfortunately for them all of the potentially anti-Hillary facts have left implications and generally discredit wrongwing narratives.
2. WIFE & I were watching the debate on tape & noticing how conspicuously they were stiffing O'Malley.  Putting on our moderate hats for a moment we found O'Malley to be nicely put together, presidential looking, wellspoken, cogent, smart, all that good stuff, as opposed to Hillary, who has some, you know, issues, and Bernie, who has some too. We found ourselves asking each other how come O'Malley gets nothing & doesn't have a chance.  Its as if the times demand a little bit of crazy.  Solid/bland doesn't cut the butter.

10/27/2015
1. LOOKS LIKE I sold 98% of my banknotes to another dealer so almost all of the old stuff sitting around is gone.  Good riddance.  Most of it had declined in value.  Immediately someone brought another 1000 banknotes, a collection no less, not an accumulation, so I'm still in the banknote business.  Banknotes have always been about 5% of my business.  Nothing I've tried has increased that ratio.  The guy who bought them wants to spend all his time on them but, he told me, he has to do coins to pay the bills.  What does it all mean?  I don't know.
2. MY PARENTS are still fragile and require care.  We just got the wills and associated paperwork in order.  Took about 2 months. Many people commented "why's it taking so long?  Can't you just do... (whatever).  Well, it turned out, no, it was kind of complicated.  Dad began with a one page document that wasn't going to work & hadn't been registered & all the other stuff that's supposed to be done.  When we were done with the new versions each parent had a 35 page document & other documents & memoranda & contingencies & modifications.  Piece of cake.  Now we can talk about long term care.
3. REMEMBER I WROTE about local politics last time, how I didn't exactly trust the new batch of local (Dem) party bosses?  Turns out they are more competent than their predecessors.  I still don't know if they are what you could call trustworthy, but they are making the trains run on time, politically speaking.  Meanwhile, I find myself not stirred by state politics: quite a few people up for reelection on both sides are getting out but the expectation is that the overall situation - domineering legislature intent on reverse robinhooding & neglecting infrastructure & cronyism - will not change due to extreme gerrymandering.  I find myself not stirred by presidential politics.  My preferred candidate appears to be becoming a bit more homogenized as time goes by, the connective bond thing being taken up by increasing propaganda about how authentic that person is.  I have not given anyone any money yet, may not until after the primary.

6/11/2015
1.SOME PEOPLE are telling me that coins are "in a slump."  Maybe so.  My flow of business is holding steady, more or less, though I went to a local show a couple of weeks ago & walked out in 5 minutes.  30 dealers, about 10 customers.  Nice weather that day, nice weather supposed to depress show attendance, but then bad weather is supposed to depress attendance too.  What would boost attendance?  Maybe nice coins & notes at reasonable prices but not so much of that.  Plenty of nice stuff but too high.  Junk was too high too, and not that much of it.  Maybe they're right, maybe it is a slump.  But I'm still busy all day every day.
2. DAD had an episode of hospital & rehab, Mom can't totally take care of herself, so I've had 3-6 hours of an extra job for the past 3 weeks, otherwise this list would have been in your hands 3 weeks ago.  He's back home, weaker & slower than before, my support activities will continue for the foreseeable future.
3. AT THE SAME TIME my political activities are in flux.  As you can see if you look around there is an increase in governing-by-seat-of-pants at almost every level of administration, with generally incompetent results.  Locally my state legislature is passing unconstitutional stuff (declared so by courts) and declining to fix the problems they created leaving administrative black holes (if you fall into the situation there is no way out).  In my local party the new officers apparently conspired together to ignore the rules for how to run the meeting that got them elected, did so, got elected, now what?  They seem not less incompetent than those that came before.  How do I know they did this?  I was at the meeting.  How do I know they conspired?  They told me, without me even asking.  Reminds me of toddlers playing with knives.   Can I work with people who act like that?  I don't know.  For that matter, are there candidates worth working for?  Debatable.  It seems to me the political party organizations have become irrelevant when a candidate can get hired by a rich person who can finance the entire campaign.  One imagines that this will not end well.
4. I WANT TO BUY COINS, medals, tokens, banknotes.  Good stuff to poundage.  Have money.  Need stuff now.

11/29/2014
SOME CHANGING MARKET & BUSINESS CONDITIONS OF NOTE:
1. SHIPPING COSTS & CONDITIONS: USPS is still cheapest but there are increasing problems.  Service is deteriorating (political reasons mostly, far as I can tell, maybe discuss that later) & prices are high.  To save bits of money I have begun using a private mailing service to buy discounted postage but still ship through USPS.  There have been losses in transit but not more than with USPS all by itself.  However, there is an overall slight increase in losses.  If your package is insured you will get your money back but if not, not.  Generally, for domestic shipments, your best bet (priority) now costs $6.00 minimum: quick, tracked, insured.  Less than that seems to be getting increasingly iffy.  For international the situation is worse.  The best service (quick and with tracking) now costs a minimum of $60.00.  Registered first class is trackable but transit time is uncertain, indemnity if lost is limited, there have been losses.  Without registration takes an undefined amount ot time, is not trackable, no indemnity if lost,  Most shipments get through but not all of them.
2. OVERALL ECONOMY HAS IMPACTED COIN BUSINESS AS FOLLOWS: healthy growth at the top, recession at lower levels, which is where I live & work.  There is less stuff available to buy, lower prices at both buy & sell, fewer customers trending older.  Low bullion prices don't help of course.  My benchmark for a bad year has been 1981.  It is not 1981 quite, but the subject comes up.  Your collection assembled 20+ years ago is worth a lot more than you paid for it but probably less than it was worth 2 years ago.  Now, there is a cyclic thing I've seen in my life, so some kind of recovery is expected.  However, in my life every rebound has involved bigger numbers of dollar & people but a smaller percentage of people, so I am not in a position to advise you when & how much things will get better for, you know, "us."
3. THAT SAID, I plan to stay in the business next year, need to buy stuff so I can sell it, have money to do that.  Looking for "good stuff," ordinary stuff, bulk low end material, interesting things.  Help me out?
4. THIS MAY OR MAY NOT be my last offering for this year.  Wishing y'all happy, merry, warm, calm & prosperous next year.

9/16/2014
1. I SEE I WROTE ABOUT the nasty stuff happening in northern Iraq back in July.  There are a couple of aspects to this complicated situation: 1) Iran is the tip of the spear in the short run & we have to help them do what needs to be done.  I am not worried about Iranian nukes because they want them to counter the Sunni nukes (Pakistan, possibly Saudi), threats to Israel are mere diversionary propaganda.  But Iran cannot win this Islamic 30 years war (population dynamics), it can only draw.  It could lose though, & losing would likely look like ISIS with 100 million people rather than few hundred thousand.  So we must, strategically, support Iran.  2) Which means supporting Assad in Syria.  We supported Stalin in WWII.  We can support Assad.  Greater good & all that.  We can always go back to hating him again when it gets to be 1946 again.  3) We USAers can't do it on the ground.  With all due respect to those what crave it, we, I'm sorry to say, don't know how.  Proxies, back channel deals with various flavors of devils.  That's not the only way, but I am not at the moment thinking of other ways that would yield any kind of non-worse result.  Hard to think of any result less worse than the piles of bodies scenario we have going on there now.  "At least" they're not making mountains of the heads they're cutting, a not uncommon spectacle in the past.  Yet.
2. THIS IS the third year of no monarch butterflies.  Shortage of pollinators have decreased the local zucchini crop, but a fig tree around the corner is heavy with fruit.  There was an outstanding mushroom bloom this August from the rains & not-too-hot temperature.  A small emergence of big fat annual cicadas, dogs & cats find them tasty and fun.
3. BUSINESS has slowed on both the buying & selling sides.  I am finding less interesting stuff to sell at prices worth buying while ordinary stuff is sluggish & also not abundant.  I will need a few hundred pounds of poundage soon.  I really want to buy whole collections, anyone?
        </div>

      </div>
    );
  }

});

module.exports = LandingPage;
