angular.module('metroGnome', [])
    .controller('bpmController', ['$scope', function (sc) {
        sc.defaultBpm = 60;
        sc.maxBpm = 250;
        sc.bpmNumber = 60;
        sc.bpmRange = 60;

        sc.updateFromRange = function () {
            sc.bpmNumber = Number(sc.bpmRange);
            drawWrapper(sc.bpmNumber);
        };
        sc.updateFromNumber = function () {
            if (typeof sc.bpmNumber === 'undefined' || sc.bpmNumber > sc.maxBpm) {
                sc.bpmRange = sc.maxBpm;
                return;
            }
            sc.bpmRange = Number(sc.bpmNumber);
            drawWrapper(sc.bpmRange);
        };

    }]);
