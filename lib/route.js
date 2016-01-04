function renderThisTemplate(template) {
	BlazeLayout.render('layout', {nav: 'nav', body: template, footer: 'footer'})
}

FlowRouter.route('/', {
	name: 'Home',
	action() {
		renderThisTemplate('home')
	}
});