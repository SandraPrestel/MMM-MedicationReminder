Module.register("MMM-MedicationReminder", {

    // default config values
    defaults: {
        reminders: [{
            medicationname: "L-Thyroxin",
            time: 2000,
            duration: 60 * 60 * 1000
        }]
        
    },

    // Build the module display
    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.config.reminders[0].medicationname;

        return wrapper;
    },

});
