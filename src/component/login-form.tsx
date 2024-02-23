import { useRef } from 'react'

export function LoginForm() {
  const ref = useRef<HTMLFormElement>(null)
  const onSubmit: React.ReactEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault()
    if (!ref.current) {
      return
    }
    /* eslint-disable */
    const { email, password, username } = Object.fromEntries(
      new FormData(ref.current).entries()
    ) as LoginFormEntry
  }
  return (
    <div>
      <form className="space-y-4 [&>*]:block" {...{ onSubmit, ref }}>
        <label>
          <span>username</span>
          <input type="text" name="username" className="border" />
        </label>
        <label>
          <span>email</span>
          <input type="email" name="email" className="border" />
        </label>
        <label>
          <span>password</span>
          <input type="password" name="password" className="border" />
        </label>
        <button className="border" type="submit">
          login
        </button>
      </form>
    </div>
  )
}

export default LoginForm

type FormName = 'username' | 'password' | 'email'
type LoginFormEntry = Record<FormName, FormDataEntryValue>
