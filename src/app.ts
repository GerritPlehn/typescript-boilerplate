const main = (): void => {
  for (let i = 0; i < 5; i++) {
    console.log(`I am #${i + 1}`, getInt())
  }
  console.log(process.env.FOO)
}

const getInt = (): number => {
  return 0.1
}

main()
