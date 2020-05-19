const { spawnSync } = require('child_process');

// TODO(jared): Maybe convert the bash file into javascript? Not sure if it's worth it.
const result = spawnSync('bash', [__dirname + '/commit_and_push.sh'], {
    stdio: 'inherit',
    encoding: 'utf8',
});

process.exit(result.status);
