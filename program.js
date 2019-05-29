process.stdin.setEncoding('utf-8');

var userSystem = process.platform,
    nodeVersion = process.versions.node,
    systemLang = process.env.lang;

process.stdout.write(nodeVersion);

process.stdin.on('readable', function() {

    var input = process.stdin.read();
    
    if(input !== null) {
        var instruction = input.toString().trim();
        if(instruction === '/exit') {
            process.stdout.write('Quitting App!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }

    switch(userSystem) {
        case 'linux':
            process.stdout.write(systemLang);
            break;
        case 'darwin':
            process.stdout.write(systemLang);
            break;
        default:
            process.stdout.write(userSystem);
    }

});
