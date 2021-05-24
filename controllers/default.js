exports.install = function() {
	ROUTE('#homepage', 'index');
	ROUTE('#contact', 'contact');
	ROUTE('#terms', 'terms');
	ROUTE('#privacy', 'privacy');
};

function plain_version() {
	var self = this;
	self.plain('REST Service {0}\nVersion: {1}'.format(CONF.name, CONF.version));
}
