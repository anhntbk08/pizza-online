

$(document).ready(function(){
    /* menu bar drop down ******/
	var menuids=["menu1"];
	function initmenu()
	{
		for (var i=0; i<menuids.length; i++)
		{
			var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
			for (var t=0; t<ultags.length; t++)
			{
				ultags[t].parentNode.onmouseover=function()
				{
					this.getElementsByTagName("ul")[0].style.display="block";
				}
				ultags[t].parentNode.onmouseout=function()
				{
					this.getElementsByTagName("ul")[0].style.display="none";
				}
			}
			for (var t=ultags.length-1; t>-1; t--)
			{ //loop through all sub menus again, and use "display:none" to hide menus (to prevent possible page scrollbars
				ultags[t].style.visibility="visible";
				ultags[t].style.display="none";
			}
			
		}
	}

	if (window.addEventListener)
		window.addEventListener("load", initmenu, false)
	else if (window.attachEvent)
		window.attachEvent("onload", initmenu);
		
	/* end dropdown menu bar */	
	
     $(".menu-item a").hover(function(){
         console.log("mouse in");
         $(this).find("span").addClass("blue-text-shadow");;
         
     } , function(){
         console.log("mouse out");
         $(this).find("span").removeClass("blue-text-shadow");
     });
     
     
});

     

