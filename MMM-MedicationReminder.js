Module.register("MMM-MedicationReminder", {

    // default config values
    defaults: {
        reminders: [{
            medicationname: "L-Thyroxin",
            time: "16:30",
            duration: 60
        }]
        
    },

    currentList: [1],

    // when the mirror has started and all modules are loaded:
    // check every minute, if a notification should be displayed and display the list of medications
    start: function() {
        var self = this;

        // initial call
        self.checkMedications();

        setInterval(function() {
            self.checkMedications();
            self.displayMedications();
        }, 1*1000);

    },


    checkMedications: function () {

        this.currentList = [];
        //this.currentList.push(2);     -- debugging

        // get current time
        currentDate = new Date();
        currentHour = currentDate.getHours();
        currentMinute = currentDate.getMinutes();

        this.config.reminders.forEach((medication) => {
            // check if the current time is within the timeframe of the reminder (time + duration)
            reminderTime = new Date("2000-01-01T" + medication.time)
            reminderHour = reminderTime.getHours();
            reminderMinute = reminderTime.getMinutes();

            maxDisplayMinute = reminderMinute + medication.duration;
            hourOverFlow = maxDisplayMinute % 60;
            maxDisplayHour = reminderHour + hourOverFlow;

            this.currentList = [];
            this.currentList.push(maxDisplayHour);

            // ... if yes: add to display list

            // ... if not go to next
        });

    },


    // create the current list of notifications
    displayMedications: function () {

        this.updateDom();
    },


    // Build the module display
    getDom: function () {
        var wrapper = document.createElement("div");
        
        //wrapper.innerHTML = this.config.reminders[0].medicationname;
        wrapper.innerHTML = this.currentList[0];

        return wrapper;
    },

});
