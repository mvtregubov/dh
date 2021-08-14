function next(){
  		var curr = document.getElementById("dd");
  		var index = document.getElementById("dd").selectedIndex;
  		if(index < curr.options.length-1){
  			var newSrc = curr.options[index+1].value;
	  		document.getElementById("dd").selectedIndex++;
	  		document.getElementById("pdfFrame").src=newSrc;
	  		document.getElementById("pdfFrame").contentWindow.location.reload();
  		}
  	}

	function prev(){
  		var curr = document.getElementById("dd");
  		var index = document.getElementById("dd").selectedIndex;
  		if(index > 0){
  			var newSrc = curr.options[index-1].value;
	  		document.getElementById("dd").selectedIndex--;
	  		document.getElementById("pdfFrame").src=newSrc;
	  		document.getElementById("pdfFrame").contentWindow.location.reload();
  		}
  	}