angular.module('futurism')
    .controller('CustomGameModalCtrl', function ($scope, matchups, _) {
        'use strict';
        
        var toNumber = function(val, min, max) {
            var num = Number(val);
            if(_.isNaN(num) || num === Infinity || _.isUndefined(num)) {
                num = 0;
            }
            if(num < min) {
                num = min;
            }
            if(num > max) {
                num = max;
            }
            return num;
        };
        
        
        $scope.rules = {
            rows: 2,
            columns: 4,
            startPride: 2,
            turnDuration: 90,
            futures: 3,
            players: 4,
            deckSize: 20,
            handSize: 5
        };
        
        
        $scope.start = function(rules) {
            rules.rows = toNumber(rules.rows, 1, 10);
            rules.columns = toNumber(rules.columns, 1, 5);
            rules.startPride = toNumber(rules.startPride, 0, 100);
            // Convert turn duration from seconds to milliseconds for futurism-multi.
            rules.turnDuration = toNumber(rules.turnDuration, 0, Infinity) * 1000;
            rules.futures = toNumber(rules.futures, 0, 50);
            rules.players = toNumber(rules.players, 2, 10);
            rules.deckSize = toNumber(rules.deckSize, 1, 100);
            rules.handSize = toNumber(rules.handSize, 1, 100);
            
            matchups.createMatchup(rules);
            $scope.$dismiss();
        };
        
    });