Template.home.rendered = () => {
	jQuery('.carousel').camera({ //here I declared some settings, the height and the presence of the thumbnails 
		height: '20%',
		pagination: false,
		thumbnails: false,
		fx: 'blindCurtainTopLeft',
		loaderColor: '#76FF03',
		loaderPadding: 4,
		loaderStroke: 2
	});
}