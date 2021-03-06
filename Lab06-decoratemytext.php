

<!DOCTYPE html>
<html>


	<head>

		<!-- metadata -->
		<meta charset="utf-8" />
		<meta name="author" content="Marty Stepp" />
		<meta name="description"
		 content="Slides for the University of Washington's CSE 190 programming labs." />
		<meta name="keywords"
		 content="programming, java, jgrasp, building java programs, stepp, reges, washington, computer science" />

		<!-- style sheet links -->
		<link rel="stylesheet" href="../common/css/slides.css" type="text/css" media="projection" id="slideProj" />
		<link rel="stylesheet" href="../common/css/outline.css" type="text/css" media="screen" id="outlineStyle" />
		<link rel="stylesheet" href="../common/css/print.css" type="text/css" media="print" id="slidePrint" />
		<link rel="stylesheet" href="../common/css/opera.css" type="text/css" media="projection" id="operaFix" />

		<!-- JS links -->
		<script src="../common/js/slides.js" type="text/javascript"></script>
		<script src="../common/js/slides2.js" type="text/javascript"></script>
		<script src="../common/js/DrawingOverlay.js" type="text/javascript"></script>

		<title>CS472 Lab 6: Decorate My Text</title>
	</head>

	<body>
		<div class="layout">
			<div id="controls"><!-- DO NOT EDIT --></div>
			<div id="currentSlide"><!-- DO NOT EDIT --></div>
			<div id="header"></div>
			<div id="footer">
				<h1>Maharishi University of Management, CS472</h1>
				<h2>Lab 6: Decorate My Text</h2>
			</div>
		</div>

		<div class="presentation">
			<div class="slide">
				<h1>Maharishi University of Management, CS472</h1>
				<h2>Lab 6: Decorate My Text</h2>

				<p class="license">
					Except where otherwise noted, the contents of this document are
					Copyright 2012 Marty Stepp, Jessica Miller, and Victoria Kirst.

					All rights reserved.
					Any redistribution, reproduction, transmission, or storage of part
					or all of the contents in any form is prohibited without the author's
					expressed written permission.
				</p>

				<p class="license">
					<em>original lab idea and code by Victoria Kirst and Jeff Prouty; revised by Brian Le, Katlyn Edwards, Roy McElmurry IV, and Marty Stepp</em>
				</p>

				<div class="w3c">
					<a href="http://validator.w3.org/check/referer"><img src="../images/w3c-html.png" alt="Valid HTML5" /></a>
					<a href="http://jigsaw.w3.org/css-validator/check/referer"><img src="../images/w3c-css.png" alt="Valid CSS" /></a>
        				<a href="http://mumstudents.org/jshint/referer.php"><img src="http://mumstudents.org/jshint/jshint-small.png" alt="Valid JS"/></a>                                
				</div>
			</div>








<div class="slide">
	<h1>Today's lab</h1>

	<p>
		Today you'll write a page where the user can type text into a box, and by clicking on UI controls, the user can decorate the text by giving it funny styling.
	</p>

	<p>
		The HTML page <code>decoratemytext.html</code> contains a basic HTML shell and page header.  This skeleton already links to a CSS file <code>decoratemytext.css</code> that defines all the styles you need.  You do not have to write any CSS code today.
	</p>

	<p>
		You will write a JavaScript file <code>decoratemytext.js</code> that will manipulate the text.
	</p>

	<p>
		Download the HTML file below (right-click, Save Target As...) to get started:
	</p>

	<ul>
		<li>
			<a class="popup" href="6/decoratemytext.html"><img src="../images/icon_html.gif" class="icon" alt="html" />
			decoratemytext.html</a>
		</li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: Create UI Elements (~15 min)</h1>

	<p class="readbeforestarting">
		(See example screenshot on next slide.)
	</p>

	<p>
		The first task is to expand <code>decoratemytext.html</code> by adding UI controls. Add HTML code for the following:
	</p>

	<ul>
		<li>
			A field for users to enter large (multi-line) amounts of text.
			<ul>
				<li>
					It should be 4 rows by 30 columns in size.
				</li>
				<li>
					Wrap it in a bordered field set box with the label "Text".
				</li>
			</ul>
		</li>
		<li>
			Add a second bordered field set box labeled "Decoration" that contains the following controls:
			<ul>
				<li>
					A button labeled: Bigger Decorations!
				</li>
				<li>
					A checkbox labeled "Bling"
				</li>
			</ul>
		</li>

		<li><strong>NOTE: Controls are sometimes used in forms; but you must not use the <code>form</code> tag on your page.</strong></li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber noincrement"></span>, output</h1>

	<p>
		Your page should look like this:
	</p>

	<div class="outputimagearea">
		<img src="6/output1-controls.png" alt="expected output" />
	</div>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: JavaScript <code>alert</code> (~5 min)</h1>

	<p>
		 Now you'll write a bit of JavaScript testing code that pops up an <code>alert</code> box.  This is just a test to make sure that your browser is running your JavaScript file, before we move on to tougher exercises.
	</p>

	<div style="float: right; margin-left: 1em">
		<img src="6/output2-helloworld.png" alt="hello world" />
	</div>

	<ul>
		<li>
			Create a new file and save it as <code>decoratemytext.js</code>.
		</li>

		<li>
			Put the following line of code into the file:

			<pre>alert("Hello, world!");</pre>
		</li>

		<li>
			Link your HTML page to your JavaScript file using a <code>script</code> tag.
		</li>

		<li>
			Refresh your page in the browser.  Do you see the <code>alert</code> message?

			<ul>
				<li>If so, move on.</li>
				<li>If not, double-check your <code>script</code> tag syntax or ask a TA for help.</li>
			</ul>
		</li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: Hello World Button (~10 min)</h1>

	<p>
		Now let's set up a very basic JS event handler.  Modify your JS code and HTML so that the "Hello, world!" <code>alert</code> message won't pop up until the user clicks the "Bigger Decorations!" button.
	</p>

	<div style="float: right; margin-left: 1em">
		<img src="6/output2-helloworld.png" alt="hello world" />
	</div>

	<ul>
		<li>
			Modify your JS file to wrap the <code>alert</code> into a function.
		</li>

		<li>
			Add an <code>onclick</code> event handler for the "Bigger Decorations!" button that calls your new function.
		</li>

		<li>
			Refresh your page in the browser.  Click the button.  Do you see the <code>alert</code>?

			<ul>
				<li>If so, move on.</li>
				<li>If not, remember that the DOM may not be loaded yet, add an <code>onload</code> handler to the global <code>window</code> object.</li>
				<li>Still not, double-check your <code>onclick</code> tag syntax and function, or ask a TA for help.</li>
			</ul>
		</li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: Bigger Decorations Button (~15 min)</h1>

	<p class="readbeforestarting">
		(See example screenshot on next slide.)
	</p>

	<p>
		Modify your JS code so that when the user clicks "Bigger Decorations!", the text in the text area will get larger.
	</p>

	<ul>
		<li>
			Make sure your text area has an <code>id</code> attribute so your JS code can talk to it.
		</li>

		<li>
			Modify your JS function so that it now changes the text area's font size to <strong>24pt</strong> .
		</li>

		<li>
			<em>Hint:</em> You can use the following Javascript syntax for accessing an element by ID and changing a style:

			<pre style="margin-bottom: 0.5em">
document.getElementById("elementID").style.propertyName = "value";
</pre>

			<ul>
				<li>Use proper units, such as "4em", and proper naming conventions, such as <code>background-color</code> .</li>
			</ul>
		</li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber noincrement"></span>, output</h1>

	<p>
		The text should look like this after the button is clicked:
	</p>

	<div>
		<img src="6/output4-biggerText.png" alt="expected output" />
	</div>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: Bling Checkbox (~15 min)</h1>

	<p class="readbeforestarting">
		(See example screenshot on next slide.)
	</p>

	<p>
		Add an event handler so that when the user checks "Bling", the text area will receive some styles.
	</p>

	<ul>
		<li>
			Add an <code>onchange</code> on the checkbox that calls a function that pops up an <code>alert</code>.
		</li>

		<li>
			Modify your new function to set the text area's font weight to <strong>bold</strong>.

			<ul>
				<li>
					You can see if a checkbox is checked by examining its <code>checked</code> attribute.  (Give it an <code>id</code>.)
				</li>
				<li>
					When the box is unchecked, the font weight should go back to normal.
				</li>
				<li>
					<em>Hint:</em> You can use the following jQuery syntax for accessing an element's attributes:

			<pre style="margin-bottom: 0.5em">
$("<var>elementID</var>").attr("<var>attributeName</var>")
</pre>
				</li>
			</ul>
		</li>

		<li>
			Once the bold part works, add the following styles to the text when the box is checked:

			<ul>
				<li>
					change its color to green
				</li>
				<li>
					underline the text (this is the CSS <code>text-decoration</code> property)
				</li>
			</ul>
		</li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber noincrement"></span>, output</h1>

	<p>
		Your page should look like this when the box is checked:
	</p>

	<div>
		<img src="6/output5-bling.png" alt="expected output" />
	</div>
</div>







<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: Font Timer (~10-15 min)</h1>

	<ul>
		<li>
			Make it so that when the "Bigger Decorations!" button is clicked, rather than setting the font size to 24pt, you'll make it <strong>2pt larger</strong> than its current size.

			<ul>
				<li>
					Read the font size such as "12pt" and change it to a larger one like "14pt".
				</li>

				<li>
					Use the text area's <code>.css("CSS Attribute")</code> property to get the current font size.
				</li>


				<li>
					You may want to use the <code>parseInt</code> function to help you solve this.
				</li>
			</ul>
		</li>

		<li>
			Once that works, make it use a <strong>timer</strong>.

			<ul>
				<li>
					Now a single click should continually increase the font size by +2pt every 500 ms.
				</li>

				<li>
					Use the <code>setInterval</code> function.  The timer should call the function you just wrote.
				</li>
			</ul>
		</li>
	</ul>
</div>



<div class="slide">
	<h1>Exercise <span class="exercisenumber"></span>: (h4x0rz only): More Glitz</h1>

	<p>
		 If you finish all previous exercises, try adding any of the following:
	</p>

	<ul>
		<li>
			When "Bling" is checked, also set the page to have a background image:

			<pre style="font-size: smaller">
http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg
</pre>
		</li>

		<li>
			Add an "Igpay Atinlay" button that converts the text to Pig Latin. The rules:

			<ol>
				<li>
					Words beginning in a consonant (or consonant cluster) have that consonant (or consonant cluster) moved to the end and <em>-ay</em> tacked on following.
				</li>

				<li>
					Words beginning in a vowel simply have <em>-ay</em> tacked on the end.
				</li>
			</ol>
		</li>

		<li>
			Add a "Malkovitch" button that causes words of &gt;= 5 characters in length to be replaced with the word "Malkovich".

			<ul>
				<li>
					(Inspired by <a class="popup" href="http://lfw.org/jminc/index.html">Malkovitch Mediator</a> by Ka-Ping Yee, and film <a href="http://www.youtube.com/watch?v=Ur3CQE8xB3c">Being John Malkovitch</a>)
				</li>
			</ul>

		</li>
	</ul>
</div>



<div class="slide">
	<h1>If you finish them all...</h1>

	<p>
		If you finish all the exercises, you can add any other content or code (or bling!) you like to your page.
	</p>

	<p>
		<strong>Great work!</strong>
	</p>
</div>




		</div><!-- end div class="presentation" -->


		<!-- Google Analytics 
		<script type="text/javascript">
			if (location.href.match(/http:\/\//)) {
				if (!location.href.match(/localhost/)) {
					var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
					document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
				}
			}
		</script>

		<script type="text/javascript">
			if (location.href.match(/http:\/\//)) {
				if (!location.href.match(/localhost/)) {
					var pageTracker = _gat._getTracker("UA-2729135-5");
					pageTracker._initData();
					pageTracker._trackPageview();
				}
			}
		</script>-->
	</body>
</html>
