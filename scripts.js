/* Defined in: "Textual.app -> Contents -> Resources -> JavaScript -> API -> core.js" */

Textual.viewFinishedLoading = function()
{
	Textual.fadeInLoadingScreen(1.00, 0.80);

	setTimeout(function() {
			   Textual.scrollToBottomOfView()
			   }, 500);
	AdjustHeight();
}

Textual.viewFinishedReload = function()
{
	Textual.viewFinishedLoading();
}

function AdjustHeight() {
        var height = document.getElementById("topic_bar").offsetHeight;
        document.getElementById("body_home").style.top = height + 'px';
}   