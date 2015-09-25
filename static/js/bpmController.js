angular.module('metroGnome', [])
    .controller('bpmController', ['$scope', '$timeout', function (sc, timeout) {
        sc.defaultBpm = {value: 60};
        sc.maxBpm = {value: 250};
        sc.bpmNumber = {value: 60};
        sc.bpmRange = {value: 60};
        sc.setTempoTaps = [];
        sc.initialTempoTap = null;

        sc.updateFromRange = function () {
            sc.bpmNumber.value = Number(sc.bpmRange.value);
            drawWrapper(sc.bpmNumber.value);
        };

        sc.updateFromNumber = function () {
            if (typeof sc.bpmNumber === 'undefined' || sc.bpmNumber.value > sc.maxBpm) {
                sc.bpmRange.value = sc.maxBpm.value;
                return;
            }
            //sc.bpmRange.value = Number(sc.bpmNumber.value);
            sc.bpmRange.value = Number(this.bpmNumber.value);

            drawWrapper(this.bpmRange.value);
        };

        sc.tapBpm = function () {
            var newTapDate = new Date(),
                newTapTimeRaw = newTapDate.getTime(),
                numTaps = sc.setTempoTaps.length,
                lastSeen;

            if (sc.initialTempoTap === null) {
                sc.initialTempoTap = newTapTimeRaw;
                sc.setTempoTaps = [];
                return;
            }

            if (numTaps === 0) {
                sc.setTempoTaps.push({
                    rawTime: newTapTimeRaw,
                    difference: newTapTimeRaw - sc.initialTempoTap
                });
                return;
            } else {
                lastSeen = sc.setTempoTaps[numTaps - 1];
                if (newTapTimeRaw - lastSeen.rawTime >= 2500) {
                    sc.setTempoTaps = [];
                    sc.initialTempoTap = newTapTimeRaw;
                    return;
                }
                sc.setTempoTaps.push({
                    rawTime: newTapTimeRaw,
                    difference: newTapTimeRaw - lastSeen.rawTime
                });
            }
            // ensure that the page is aware of the scope updates
            timeout(function () {
                this.bpmNumber.value = Number(0);
                this.bpmRange.value = 0;
            });
        };

    }]);
