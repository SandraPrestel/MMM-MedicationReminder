Module.register("MMM-MedicationReminder", {

    // default config values
    defaults: {
        reminders: [{
            medicationname: "L-Thyroxin",
            time: 1430,
            duration: 60 * 60 * 1000
        }]
        
    },

    currentList: [],

    // when the mirror has started and all modules are loaded:
    // check every minute, if a notification should be displayed and display the list of medications
    start: function() {
        var self = this;

        // initial call
        self.checkMedications();

        setInterval(function() {
            self.checkMedications();
            self.displayMedications();
        }, 60*1000);

    },


    checkMedications: function () {

        let self = this;

        this.config.reminders.array.forEach(function(medication, i) {
            // get current time
            currentDate = new Date();
            currentTime = currentDate.toLocaleTimeString();
            // check if the current time is within the timeframe of the reminder (time + duration)
            console.log(currentTime);

            // ... if yes: add to display list

            // ... if not go to next
        });

        

    },


    // create the current list of notifications
    displayMedications: function () {


        self.updateDom();
    },


    // Build the module display
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.reminders[0].medicationname;

        return wrapper;
    },

});
