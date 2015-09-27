angular.module('metroGnome', [])
    .controller('bpmController', ['$scope', '$timeout', function (sc, timeout) {
        // bind scope variables to objects rather than primitives
        sc.defaultBpm = {value: 60};
        sc.maxBpm = {value: 250};
        sc.bpmNumber = {value: 60};
        sc.bpmRange = {value: 60};
        sc.setTempoTaps = [];
        sc.initialTempoTap = null;
        sc.buttonText = 'Start metroGnome';
        clickActive = false;

        sc.updateFromRange = function () {
            sc.bpmNumber.value = Number(sc.bpmRange.value);
            frameRate(sc.bpmNumber.value / 60);
        };

        sc.updateFromNumber = function () {
            if (typeof sc.bpmNumber === 'undefined' || sc.bpmNumber.value > sc.maxBpm) {
                sc.bpmRange.value = sc.maxBpm.value;
                return;
            }
            sc.bpmRange.value = Number(this.bpmNumber.value);

            frameRate(sc.bpmRange.value / 60);
        };

        sc.toggleClicking = function () {
            if (clickActive) {
                clickActive = false;
                sc.buttonText = 'Start metroGnome';
            } else {
                clickActive = true;
                sc.buttonText = 'Stop metroGnome';
            }
        };

        sc.tapBpm = function () {
            var newTapDate = new Date(),
                newTapTimeRaw = newTapDate.getTime(),
                numTaps = sc.setTempoTaps.length,
                lastSeen,
                total,
                newRate,
                currentTimeStamp;

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
                if (numTaps >= 5 || newTapTimeRaw - lastSeen.rawTime >= 2500) {
                    sc.setTempoTaps = [];
                    numTaps = 0;
                    sc.initialTempoTap = newTapTimeRaw;
                    return;
                }
                sc.setTempoTaps.push({
                    rawTime: newTapTimeRaw,
                    difference: newTapTimeRaw - lastSeen.rawTime
                });
            }
            total = 0;
            for (currentTimeStamp in sc.setTempoTaps) {
                total += sc.setTempoTaps[currentTimeStamp].difference;
            }

            newRate = floor(60 / (total / (numTaps + 1) / 1000));

            // ensure that the page is aware of the scope updates
            timeout(function () {
                if (newRate > sc.maxBpm.value) {
                    newRate = sc.maxBpm.value;
                }
                this.bpmNumber.value = Number(newRate);
                this.bpmRange.value = newRate;
                frameRate(newRate / 60);
            });
        };

    }]);
