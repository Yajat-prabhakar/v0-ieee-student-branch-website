import { execSync } from 'child_process'

try {
  const result = execSync('git pull origin v0/yajat-prabhakar-aab6d554', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf8',
  })
  console.log(result)
} catch (err) {
  console.error(err.message)
}
