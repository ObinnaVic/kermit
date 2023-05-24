
	var navbar = document.getElementById('navbar');
	var links = document.getElementsByClassName('link');
	var navbarchild =links.length;


	function opennav(){

		navbar.classList.add('dropdown');
	}

	for(var i= 0; i< links.length; i++){
		links[i].addEventListener('click', () => {
			navbar.classList.remove('dropdown');
		})
	}
