
export default function Contact() {
  return (
    <form>
      <input type="text" name="full-name" />
      <input type="mail" name="mail" />
      <textarea name="description" cols={16} rows={6} >
        <input type="submit" value="ENVIAR" />
      </textarea>
    </form>
  )
}
