<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
$(Picallery.html).ready(function()
{
	$('li').hover(function()
	{
		$(this).addClass('active');
	},
	function()
	{
		$(this).removeClass('active');
	});
	
	$('img').hover(function()
	{
		$(this).addClass('select');
	},
	function()
	{
		$(this).removeClass('select');
	});
 var s = $("#nav-wrap");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        
        if (windowpos >= pos.top) {
            s.addClass("stick");
        } else {
            s.removeClass("stick"); 
        }
    });
});
</script>	