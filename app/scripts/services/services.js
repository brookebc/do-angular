angular.module('')
.factory('Blog', function($resource){
	return $resource ('http://tiy-fee-rest.herokuapp.com/collections/Blog')

},

)
