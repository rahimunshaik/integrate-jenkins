function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hi ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }