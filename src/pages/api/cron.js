const CronJob = require('cron').CronJob
const job = new CronJob('* * * * * *', () => {
  const t = require('../../utils/starkBankUtils.js')
  console.log(t.inVoiceCreate())
})
job.start()