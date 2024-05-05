// define icon urls for different medication types
const iconlist = {
    pill: '<i class="fa-solid fa-pills"></i>',
    spray: '<i class="fa-solid fa-spray-can"></i>',
    syringe: '<i class="fa-solid fa-syringe"></i>',
    other: '<i class="fa-solid fa-prescription-bottle-medical fa-border" style="--fa-border-color: transparent"></i>'
};

Module.register("MMM-MedicationReminder", {

    // default config values
    defaults: {
        reminders: [{
            medicationname: "Some Tabletts",
            type: "pill",
            time: "16:30",
            duration: 60
        },{
            medicationname: "Nose Spray",
            type: "spray",
            time: "12:00",
            duration: 60
        },{
            medicationname: "Some other medication",
            type: "other",
            time: "12:30",
            duration: 60
        }
    ]
    },
    
    currentList: [],

    // when the mirror has started and all modules are loaded:
    // check every minute, if a notification should be displayed and display the list of medications
    start: function() {
        var self = this;

        // initial call
        self.checkMedications();
        self.displayMedications();

        setInterval(function() {
            self.checkMedications();
            self.displayMedications();
        }, 60*1000);

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
            reminderDate = new Date(currentDate.getTime());
            reminderDate.setHours(medication.time.split(":")[0]);
            reminderDate.setMinutes(medication.time.split(":")[1]);

            reminderEndHour = reminderDate.getHours();
            reminderEndMinute = reminderDate.getMinutes() + medication.duration;
            if(reminderEndMinute >= 60){
                reminderEndHour = reminderEndHour + Math.floor(reminderEndMinute/60);
                reminderEndMinute = reminderEndMinute % 60;
            };

            reminderEndDate = new Date(currentDate.getTime());
            reminderEndDate.setHours(reminderEndHour);
            reminderEndDate.setMinutes(reminderEndMinute);

            reminderActive = reminderDate < currentDate && reminderEndDate > currentDate;

            // ... if yes: add medication to display list
            if (reminderActive){
                this.currentList.push(medication);
            }

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
        let medlist = '';

        this.currentList.forEach((element) => {
            medlist = medlist + '<p> ' + iconlist[element.type] + '  ' + element.medicationname + '</p>';
        });
        
        //textWithLogo = ' ' + '<p> <i class="fa-solid fa-pills"></i>   Test   </p>'
        wrapper.innerHTML = medlist;

        return wrapper;
    },

});
