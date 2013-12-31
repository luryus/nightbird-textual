/* Defined in: "Textual.app -> Contents -> Resources -> JavaScript -> API -> core.js" */

Textual.viewFinishedLoading = function()
{
	Textual.fadeInLoadingScreen(1.00, 0.80);

	setTimeout(function() {
			   Textual.scrollToBottomOfView()
			   }, 500);
}

Textual.viewFinishedReload = function()
{
	Textual.viewFinishedLoading();
}
