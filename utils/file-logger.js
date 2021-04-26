try {
    const log = `IP:${parseIp(req)} URL:${req.originalUrl}  METHOD:${req.method}  OPERANDS:${req.query.a + ' and ' + req.query.b}\n`
    await fs.appendFile('logs/logs.txt', log)
} catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
}