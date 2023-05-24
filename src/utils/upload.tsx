export default function convertBase64(file: any) {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)

  fileReader.onload = () => {
    return fileReader.result
  }
  fileReader.onerror = () => {
    return fileReader.error
  }
}
