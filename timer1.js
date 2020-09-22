let numArguments = process.argv.length;

if (numArguments > 2) {
  const inputArguments = process.argv.slice(2, numArguments);

  for (const argument of inputArguments) {
    const delay = Number(argument) * 1000;

    if (!isNaN(delay) && delay >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  }
}
