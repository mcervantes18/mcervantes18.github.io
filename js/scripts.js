function rando(range) {
  return Math.floor(Math.random() * range).toString();
}

function starProps(diameter, canvasHeight) {
  var d = rando(diameter);
  return {
    height: d,
    width: d,
    top: rando(canvasHeight) + 'px',
    left: rando(canvasHeight) + 'px',
    'background-color': 'hsla(' + rando(360) + ',50%,75%, 1)'
  };
}

for (var i = 0; i < 5000; i++) {
  $('.galaxy').append(
    $('<div class="star"></div>').css(starProps(3, 800))
  );
}

for (var i = 0; i < 700; i++) {
  var diameter = rando(5);

  $('body').append(
    $('<div class="star"></div>').css({
      height: diameter,
      width: diameter,
      top: rando(100) + 'vh',
      left: rando(100) + 'vw',
      'background-color': 'hsla(' + rando(360) + ',50%,75%, 1)',
      opacity: '0.8'
    })
  );
}angular.module('ionicApp', ['ionic'])

/*======================

Controllers

========================*/

.controller('appCtrl', function($scope, $ionicSideMenuDelegate) {
  setTimeout(function() {
    $ionicSideMenuDelegate.toggleLeft();
  }, 600)
  var e = 'slide_effect,scale_effect,fade_effect,slide_up,wave,drop_in';
  $scope.slide = function(se) {
    $('.item').removeClass().addClass('item')
    $('.item').addClass(se);
    $('button').removeClass('active')
    $('.b_' + se).addClass('active');
    $ionicSideMenuDelegate.toggleLeft();
    if ($ionicSideMenuDelegate.isOpen() == true) {
      setTimeout(function() {
        $ionicSideMenuDelegate.toggleLeft();
      }, 700)
    }
  };
});

$('button').click(function() {
  $(this).addClass('active')
});
angular.module('ionicApp', ['ionic'])

/*======================

Controllers

========================*/

.controller('appCtrl', function($scope, $ionicSideMenuDelegate) {
  setTimeout(function() {
    $ionicSideMenuDelegate.toggleLeft();
  }, 600)
  var e = 'slide_effect,scale_effect,fade_effect,slide_up,wave,drop_in';
  $scope.slide = function(se) {
    $('.item').removeClass().addClass('item')
    $('.item').addClass(se);
    $('button').removeClass('active')
    $('.b_' + se).addClass('active');
    $ionicSideMenuDelegate.toggleLeft();
    if ($ionicSideMenuDelegate.isOpen() == true) {
      setTimeout(function() {
        $ionicSideMenuDelegate.toggleLeft();
      }, 700)
    }
  };
});

$('button').click(function() {
  $(this).addClass('active')
});