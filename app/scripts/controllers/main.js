'use strict';

angular.module('pdezengardenApp')
    .controller('MainCtrl', function ($scope) {
	$scope.pdes = [
	    {'name': 'Laplace Equation in 2D',
	     'thumbnail': 'http://placehold.it/350x250/428bca/fff',
	     'snippet': 'Harmonic functions from analytic functions.'},
	    {'name': 'Heat Equation',
	     'thumbnail': 'http://placehold.it/350x250/428bca/fff',
	     'snippet': 'Diffusion and smoothing.'},
	    {'name': 'Backward Heat Equation',
	     'thumbnail': 'http://placehold.it/350x250/428bca/fff',
	     'snippet': 'Ill-posed problems and regularization.'},
	    {'name': 'Constant Coefficient Linear Equations',
	     'thumbnail': 'http://placehold.it/350x250/428bca/fff',
	     'snippet': 'Fourier analysis and boundedness.'}
    ];
});
