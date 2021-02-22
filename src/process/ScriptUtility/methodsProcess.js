export default function (body) {
  const output = {}
  for (const property of body.value.properties) {
    output[property.key.name] = property.value
    if (output[property.key.name]) {
      output[property.key.name].func = true
    }
  }
  console.log('output:methods', output)
  console.log('output:methods:json', JSON.stringify(output, null, 2))
  return output
}
