# MMM-MedicationReminder

A simple module to remind you to take your medications on time.

## Example

![Medication Reminder](MedicationReminder.png)

## Dependencies

- Installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation

In your terminal, navigate to the modules folder and clone this repository.

```
$ cd ~/MagicMirror/modules
$ git clone https://github.com/SandraPrestel/MMM-MedicationReminder.git
```

## Minimal configuration

Add this to your `~/MagicMirror/config/config.js`

```js
{
    module: 'MMM-WaterReminder',
    position: 'bottom_center',
    config: {
    }
}
```

## Default configuration

```js
{
  config: {
    reminders: [
      {
        medicationname: "Some Medication",
        type: "pill",
        time: "14:15",
        duration: 60,
      },
      {
        medicationname: "Nose Spray",
        type: "spray",
        time: "11:00",
        duration: 60,
      },
      {
        medicationname: "Some other medication",
        type: "other",
        time: "9:30",
        duration: 60,
      },
    ];
  }
}
```

## Config options

| **Option**       | **Default** | **Description**                                                                                                             |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `reminders`      | see above   | List of medications you want to be reminded of                                                                              |
| `medicationname` | see above   | Name of the medication                                                                                                      |
| `type`           | see above   | Type of medication. <br>This is used to select the displayed icon. <br>Possible values: `pill`, `spray`, `syringe`, `other` |
| `time`           | see above   | Reminder time in the format: `hh:mm`                                                                                        |
| `duration`       | `60`        | How long the reminder should be displayed (in minutes)                                                                      |
