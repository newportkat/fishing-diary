import { nanoid } from "nanoid"

export const defaultEntries = [
   {
      key: nanoid(),
      date: "12-11-2022",
      time: "10:20",
      location: "Williamstown",
      fish: "1",
      description: "Overcast clouds",
      temperature: "13",
      barometer: "1020",
      windSpeed: "6",
      windDirecetion: "ESE",
      phaseEmoji: "🌓",
      moonPhase: "Last Quarter",
      isExample: true,
   },
   {
      key: nanoid(),
      date: "12-11-2022",
      time: "18:49",
      location: "Port Melbourne",
      fish: "2",
      description: "Few clouds",
      temperature: "12",
      barometer: "1017",
      windSpeed: "8",
      windDirecetion: "E",
      phaseEmoji: "🌓",
      moonPhase: "Last Quarter",
      isExample: true,
   },
   {
      key: nanoid(),
      date: "14-11-2022",
      time: "13:51",
      location: "Altona",
      fish: "0",
      description: "Rain",
      temperature: "10",
      barometer: "1022",
      windSpeed: "16",
      windDirecetion: "S",
      phaseEmoji: "🌓",
      moonPhase: "Last Quarter",
      isExample: true,
   },
   {
      key: nanoid(),
      date: "15-11-2022",
      time: "06:08",
      location: "Port Arlington",
      fish: "2",
      description: "Clear sky",
      temperature: "15",
      barometer: "1018",
      windSpeed: "7",
      windDirecetion: "N",
      phaseEmoji: "🌓",
      moonPhase: "Last Quarter",
      isExample: true,
   },
]

export default { defaultEntries }